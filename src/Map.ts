

interface DisplayLocation{
    location: {
     lat: number,
     lng: number
 };
 markerContent():string;
}

export class CustomMap {
private googleMap: google.maps.Map;

constructor(divID: string){
 this.googleMap = new google.maps.Map(document.getElementById(divID) as HTMLElement, {
     zoom: 1,
     center: {
         lat: 0,
         lng: 0,
     }
 })
}

addMarker(display: DisplayLocation ): void {
 const marker = new google.maps.Marker({
     map: this.googleMap,
     position :{
         lat: display.location.lat,
         lng: display.location.lng
     }
 })
marker.addListener('cick', ()=> {
 const infoWindow = new google.maps.InfoWindow({
     content: 'I am info window'
 })
infoWindow.open(this.googleMap, marker)      
}) 
} 

}

