cd /storage/snow-cams/hotham/big-d   
curl -o $(date "+%d-%m-%Y").jpg https://www.mthotham.com.au/Portals/0/webcams/Big_D.jpg
:l
cd /storage/snow-cams/hotham/imagine  
curl -o $(date "+%d-%m-%Y").jpg https://www.mthotham.com.au/Portals/0/webcams/RH_UpperImagine.jpg

cd /storage/snow-cams/hotham/slalom-gully
curl -o $(date "+%d-%m-%Y").jpg https://www.mthotham.com.au/Portals/0/webcams/SlalomGully.jpg

cd /storage/snow-cams/hotham/gotcha  
curl -o $(date "+%d-%m-%Y").jpg https://www.mthotham.com.au/Portals/0/webcams/RH_Gotcha.jpg

cd /storage/snow-cams/hotham/summit
curl -o $(date "+%d-%m-%Y").jpg https://www.mthotham.com.au/Portals/0/webcams/SummitTrainer.jpg

cd /storage/snow-cams/hotham/reports  



cd /storage/snow-cams/falls-creek/drovers 
curl -o $(date "+%d-%m-%Y").jpg https://www.fallscreek.com.au/wp-content/uploads/cam-fc-drovers.jpg

cd /storage/snow-cams/falls-creek/main-street  
curl -o $(date "+%d-%m-%Y").jpg https://www.fallscreek.com.au/wp-content/uploads/cam-fc-mainstreet.jpg

cd /storage/snow-cams/falls-creek/reports 
curl -o $(date "+%d-%m-%Y").json https://www.fallscreek.com.au/wp-content/uploads/FCSnowReport_2021.json

cd /storage/snow-cams/falls-creek/ruined-castle  
curl -o $(date "+%d-%m-%Y").jpg https://www.fallscreek.com.au/wp-content/uploads/cam-fc-ruinedcastle.jpg

cd /storage/snow-cams/falls-creek/towers
curl -o $(date "+%d-%m-%Y").jpg https://www.fallscreek.com.au/wp-content/uploads/cam-fc-towers.jpg
