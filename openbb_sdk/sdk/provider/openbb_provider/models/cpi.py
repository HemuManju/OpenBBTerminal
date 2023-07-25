from datetime import date as dateType
from typing import List, Optional

from openbb_fred.utils.fred_helpers import CPI_COUNTRIES, CPI_FREQUENCY, CPI_UNITS
from pydantic import validator

from openbb_provider.abstract.data import Data, QueryParams


class CPIQueryParams(QueryParams):
    """CPI query.
    When other provders are added, this will probably need less strict types

    Parameter
    ---------
    countries: List[CPI_COUNTRIES]
        The country or countries you want to see.
    units: List[CPI_UNITS]
        The units you want to see, can be "growth_previous", "growth_same" or "index_2015".
    frequency: List[CPI_FREQUENCY]
        The frequency you want to see, either "annual", monthly" or "quarterly".
    harmonized: bool
        Whether you wish to obtain harmonized data.
    start_date: Optional[date]
        Start date, formatted YYYY-MM-DD
    end_date: Optional[date]
        End date, formatted YYYY-MM-DD
    """

    countries: List[CPI_COUNTRIES]
    units: CPI_UNITS = "growth_same"
    frequency: CPI_FREQUENCY = "monthly"
    harmonized: bool = False
    start_date: Optional[dateType]
    end_date: Optional[dateType]


class CPIData(Data):
    date: dateType
    realtime_start: dateType
    realtime_end: dateType
    value: float

    @validator("value", pre=True)
    def value_validate(cls, v: str):  # pylint: disable=E0213
        if v == ".":
            return 0.0
        return float(v)
