"""FMP Global News fetcher."""

from typing import Any, Dict, List, Optional
from datetime import datetime
import math

from openbb_provider.abstract.fetcher import Fetcher
from openbb_provider.standard_models.global_news import (
    GlobalNewsData,
    GlobalNewsQueryParams,
)
from pydantic import Field, validator

from openbb_fmp.utils.helpers import get_data_many


class FMPGlobalNewsQueryParams(GlobalNewsQueryParams):
    """FMP Global News query.

    Source: https://site.financialmodelingprep.com/developer/docs/general-news-api/
    """


class FMPGlobalNewsData(GlobalNewsData):
    """FMP Global News Data."""

    class Config:
        """Pydantic alias config using fields dict."""

        fields = {"date": "publishedDate"}

    site: str = Field(description="Site of the news.")

    @validator("date", pre=True, check_fields=False)
    def date_validate(cls, v):  # pylint: disable=E0213
        """Return the date as a datetime object."""
        return datetime.strptime(v, "%Y-%m-%dT%H:%M:%S.%fZ")


class FMPGlobalNewsFetcher(
    Fetcher[
        FMPGlobalNewsQueryParams,
        List[FMPGlobalNewsData],
    ]
):
    """Transform the query, extract and transform the data from the FMP endpoints."""

    @staticmethod
    def transform_query(params: Dict[str, Any]) -> FMPGlobalNewsQueryParams:
        """Transform the query params."""
        return FMPGlobalNewsQueryParams(**params)

    @staticmethod
    def extract_data(
        query: FMPGlobalNewsQueryParams,
        credentials: Optional[Dict[str, str]],
        **kwargs: Any,
    ) -> List[Dict]:
        """Return the raw data from the FMP endpoint."""
        api_key = credentials.get("fmp_api_key") if credentials else ""

        base_url = "https://financialmodelingprep.com/api/v4"
        pages = math.ceil(query.limit/20)
        all_data = []

        for page in range(pages):
            url = f"{base_url}/general_news?page={page}&apikey={api_key}"
            data = get_data_many(url, **kwargs)
            all_data.extend(data)

        all_data = sorted(all_data, key=lambda x: x["publishedDate"], reverse=True)
        all_data = all_data[:query.limit]

        return all_data

    @staticmethod
    def transform_data(data: List[Dict]) -> List[FMPGlobalNewsData]:
        """Return the transformed data."""
        return [FMPGlobalNewsData(**d) for d in data]
