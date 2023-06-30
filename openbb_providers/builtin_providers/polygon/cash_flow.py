# IMPORT STANDARD
from datetime import date as dateType
from datetime import datetime
from typing import Dict, List, Optional

# IMPORT THIRD-PARTY
from pydantic import Field

from builtin_providers.polygon.helpers import get_data
from builtin_providers.polygon.types import PolygonFundamentalQueryParams

# IMPORT INTERNAL
from openbb_provider.model.abstract.data import Data
from openbb_provider.model.data.cash_flows import (
    CashFlowStatementData,
    CashFlowStatementQueryParams,
)
from openbb_provider.provider.abstract.fetcher import Fetcher
from openbb_provider.provider.provider_helpers import data_transformer, get_querystring

# noqa: E501


class PolygonCashFlowStatementQueryParams(PolygonFundamentalQueryParams):
    """Source: https://polygon.io/docs/stocks#!/get_vx_reference_financials"""

    __name__ = "PolygonCashFlowStatementQueryParams"


class PolygonCashFlowStatementData(Data):
    __name__ = "PolygonCashFlowStatementData"
    start_date: dateType = Field(alias="date")
    tickers: Optional[List[str]] = Field(alias="symbol")
    cik: Optional[str]
    filing_date: dateType
    acceptance_datetime: Optional[datetime]
    fiscal_period: Optional[str] = Field(alias="period")
    # exchange_gain_losses: int
    net_cash_flow: int
    net_cash_flow_from_financing_activities: int
    net_cash_flow_from_investing_activities: int
    net_cash_flow_from_operating_activities: int
    net_cash_flow_continuing: int
    net_cash_flow_from_financing_activities_continuing: int
    net_cash_flow_from_investing_activities_continuing: int
    net_cash_flow_from_operating_activities_continuing: int


class PolygonCashFlowStatementFetcher(
    Fetcher[
        CashFlowStatementQueryParams,
        CashFlowStatementData,
        PolygonCashFlowStatementQueryParams,
        PolygonCashFlowStatementData,
    ]
):
    @staticmethod
    def transform_query(
        query: CashFlowStatementQueryParams, extra_params: Optional[Dict] = None
    ) -> PolygonCashFlowStatementQueryParams:
        period = "annual" if query.period == "annually" else "quarterly"
        return PolygonCashFlowStatementQueryParams(
            symbol=query.symbol, period=period, **extra_params if extra_params else {}  # type: ignore
        )

    @staticmethod
    def extract_data(
        query: PolygonCashFlowStatementQueryParams, api_key: str
    ) -> List[PolygonCashFlowStatementData]:
        base_url = "https://api.polygon.io/vX/reference/financials"
        query_string = get_querystring(query.dict(), [])
        request_url = f"{base_url}?{query_string}&apiKey={api_key}"
        data = get_data(request_url)["results"]

        if len(data) == 0:
            raise RuntimeError("No Cash Flow Statement found")

        to_return = []
        for item in data:
            new = {"acceptance_datetime": item.get("acceptance_datetime")}
            new["start_date"] = item["start_date"]
            new["filing_date"] = item.get("filing_date")
            new["cik"] = item["cik"]
            new["fiscal_period"] = item["fiscal_period"]
            new["tickers"] = item["tickers"]
            cf = item["financials"]["cash_flow_statement"]
            new["net_cash_flow_from_financing_activities"] = cf[
                "net_cash_flow_from_financing_activities"
            ].get("value")
            new["net_cash_flow_from_investing_activities"] = cf[
                "net_cash_flow_from_investing_activities"
            ].get("value")
            new["net_cash_flow_from_operating_activities"] = cf[
                "net_cash_flow_from_operating_activities"
            ].get("value")
            new["net_cash_flow_continuing"] = cf["net_cash_flow_continuing"].get(
                "value"
            )
            new["net_cash_flow_from_financing_activities_continuing"] = cf[
                "net_cash_flow_from_financing_activities_continuing"
            ].get("value")
            new["net_cash_flow_from_investing_activities_continuing"] = cf[
                "net_cash_flow_from_investing_activities_continuing"
            ].get("value")
            new["net_cash_flow_from_operating_activities_continuing"] = cf[
                "net_cash_flow_from_operating_activities_continuing"
            ].get("value")
            new["net_cash_flow"] = cf["net_cash_flow"].get("value")

            to_return.append(PolygonCashFlowStatementData(**new))
        return to_return

    @staticmethod
    def transform_data(
        data: List[PolygonCashFlowStatementData],
    ) -> List[CashFlowStatementData]:
        processors = {"tickers": lambda x: "" if not x else ",".join(x)}
        return data_transformer(data, CashFlowStatementData, processors)
