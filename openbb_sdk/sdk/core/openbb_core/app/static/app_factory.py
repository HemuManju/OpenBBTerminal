"""App factory."""
# pylint: disable=W0231:super-init-not-called

from typing import Optional, Type, TypeVar

from openbb_core.app.command_runner import CommandRunner
from openbb_core.app.model.system_settings import SystemSettings
from openbb_core.app.model.user_settings import UserSettings
from openbb_core.app.static.account import Account
from openbb_core.app.static.container import Container
from openbb_core.app.static.coverage import Coverage

E = TypeVar("E", bound=Type[Container])


def create_app(extensions: Optional[E] = None):
    """Create the app."""

    class App(extensions or Container):  # type: ignore
        # fmt: off
        """OpenBB SDK.

Utilities:
    /account
    /user
    /system
    /coverage

Extensions:"""
        # fmt: on

        def __init__(self, command_runner):
            self._command_runner = command_runner
            self._account = Account(self)
            self._coverage = Coverage()

        def __repr__(self) -> str:
            # pylint: disable=E1101
            ext_doc = (
                super().__doc__ if extensions else "\n    No extensions installed."
            )
            return (self.__doc__ or "") + (ext_doc or "")

        @property
        def account(self) -> Account:
            """Account menu."""
            return self._account

        @property
        def user(self) -> UserSettings:
            """User settings."""
            return self._command_runner.user_settings

        @property
        def system(self) -> SystemSettings:
            """System settings."""
            return self._command_runner.system_settings

        @property
        def coverage(self) -> Coverage:
            """Coverage menu."""
            return self._coverage

    return App(command_runner=CommandRunner())
