"""FMP Executive Compensation Fetcher."""

# IMPORT STANDARD
from datetime import date as dateType
from datetime import datetime
from typing import Dict, List, Optional

# IMPORT THIRD-PARTY
from pydantic import validator

from builtin_providers.fmp.helpers import create_url, get_data_many
from openbb_provider.model.abstract.data import Data

# IMPORT INTERNAL
from openbb_provider.model.data.executive_compensation import (
    ExecutiveCompensationData,
    ExecutiveCompensationQueryParams,
)
from openbb_provider.provider.abstract.fetcher import Fetcher
from openbb_provider.provider.provider_helpers import data_transformer

# This part is only provided by FMP and not by the other providers for now.


class FMPExecutiveCompensationQueryParams(ExecutiveCompensationQueryParams):
    """FMP Executive Compensation query.

    Source: https://site.financialmodelingprep.com/developer/docs/executive-compensation-api/

    Parameter
    ---------
    symbol : str
        The symbol of the company.
    """

    __name__ = "FMPExecutiveCompensationQueryParams"


class FMPExecutiveCompensationData(Data):
    __name__ = "FMPExecutiveCompensationData"

    cik: Optional[str]
    symbol: str
    filingDate: dateType
    acceptedDate: dateType
    nameAndPosition: str
    year: int
    salary: float
    bonus: float
    stock_award: float
    incentive_plan_compensation: float
    all_other_compensation: float
    total: float
    url: str

    @validator("acceptedDate", pre=True)
    def convert_accepted_date(cls, v):  # pylint: disable=E0213
        return datetime.strptime(v, "%Y-%m-%d %H:%M:%S")

    @validator("filingDate", pre=True)
    def convert_filing_date(cls, v):  # pylint: disable=E0213
        return datetime.strptime(v, "%Y-%m-%d")


class FMPExecutiveCompensationFetcher(
    Fetcher[  # type: ignore
        ExecutiveCompensationQueryParams,
        ExecutiveCompensationData,
        FMPExecutiveCompensationQueryParams,
        FMPExecutiveCompensationData,
    ]
):
    @staticmethod
    def transform_query(
        query: ExecutiveCompensationQueryParams, extra_params: Optional[Dict] = None
    ) -> FMPExecutiveCompensationQueryParams:
        return FMPExecutiveCompensationQueryParams.parse_obj(query)

    @staticmethod
    def extract_data(
        query: FMPExecutiveCompensationQueryParams, api_key: str
    ) -> List[FMPExecutiveCompensationData]:
        url = create_url(4, "governance/executive_compensation", api_key, query)
        return get_data_many(url, FMPExecutiveCompensationData)

    @staticmethod
    def transform_data(
        data: List[FMPExecutiveCompensationData],
    ) -> List[ExecutiveCompensationData]:
        return data_transformer(data, ExecutiveCompensationData)
