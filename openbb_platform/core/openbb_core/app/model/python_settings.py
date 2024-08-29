"""Python configuration settings model."""

from typing import List, Optional

from pydantic import BaseModel, Field, PositiveInt


class PythonSettings(BaseModel):
    """Settings model for Python interface configuration."""

    docstring_sections: List[str] = Field(
        default_factory=lambda: ["description", "parameters", "returns", "examples"],
        description="Sections to include in autogenerated docstrings.",
    )
    docstring_max_length: Optional[PositiveInt] = Field(
        default=None, description="Maximum length of autogenerated docstrings."
    )

    def __repr__(self) -> str:
        """Return a string representation of the model."""
        return f"{self.__class__.__name__}\n\n" + "\n".join(
            f"{k}: {v}" for k, v in self.model_dump().items()
        )
