import os

from django.http import JsonResponse

codespace_name = os.environ.get('CODESPACE_NAME')
if codespace_name:
    base_url = f"https://{codespace_name}-8000.app.github.dev"
else:
    base_url = "http://localhost:8000"


def api_root(request):
    return JsonResponse(
        {
            "message": "OctoFit Tracker API",
            "base_url": base_url,
            "endpoints": {
                "auth_status": f"{base_url}/api/auth/status/",
                "activities": f"{base_url}/api/activities/",
            },
        }
    )


def auth_status(request):
    return JsonResponse(
        {
            "authenticated": False,
            "profile": None,
        }
    )


def activity_list(request):
    return JsonResponse(
        {
            "count": 2,
            "results": [
                {
                    "id": "1",
                    "name": "Morning Run",
                    "duration_minutes": 30,
                    "calories_burned": 280,
                },
                {
                    "id": "2",
                    "name": "Strength Training",
                    "duration_minutes": 45,
                    "calories_burned": 360,
                },
            ],
        }
    )
