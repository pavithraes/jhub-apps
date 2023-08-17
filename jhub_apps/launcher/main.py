import panel as pn

from jhub_apps.launcher.panel_app import createApp


def app():
    pn.serve(
        {'/app': createApp},
        port=5000,
        address="localhost",
        allow_websocket_origin=["localhost:8000"],
        show=False,
    )


if __name__ == '__main__':
    app()
