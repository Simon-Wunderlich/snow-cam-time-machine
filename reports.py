from datetime import datetime
import json
import requests

date = datetime.now().strftime("%d-%m-%Y")

r = requests.get("https://www.fallscreek.com.au/wp-content/uploads/FCSnowReport_2021.json")
report = r.json()

with open(f"/storage/snow-cams/falls-creek/reports/{date}.json", "w") as f:

    newReport = {}
    newReport["temp"] = report["Weather"]["TempNow"].replace("<i class=\"wi wi-celsius\"></i>", "")
    newReport["wind"] = report["Weather"]["WindSpeed"]
    newReport["snow"] = report["Patrol"]["PatrolNaturalSnowDepth"]
    newReport["lifts"] = []
    for lift in report["Lifts"]["Lift"]:
        newReport["lifts"].append({
            "name" : lift["LiftName"],
            "status" : lift["LiftStatusMorning"]
            })

    json.dump(newReport, f, indent = 4)
