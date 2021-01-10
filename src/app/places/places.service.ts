import { Injectable } from '@angular/core';
import { Place} from "./place.model";

@Injectable({
  providedIn: 'root'
})

export class PlacesService {

    private places: Place[] =[
        {
        id: '1',
        title: 'Eiffel Tower',
        imageURL: 'https://www.ngenespanol.com/wp-content/uploads/2018/08/Fotografiar-la-Torre-Eiffel-de-noche-est%C3%A1-prohibido.jpg',
        comments: ['Awesome place','wonderful experience']
        },
        {
        id: '2',
        title: 'Liberty Statue',
        imageURL: 'https://www.eltiempo.com/uploads/2020/07/21/5f16f0ea540ef.jpeg',
        comments: ['Awesome place','wonderful experience']
        },
        {
        id: '3',
        title: 'Statue of Liberty',
        imageURL: 'https://www.eltiempo.com/uploads/2020/07/21/5f16f0ea540ef.jpeg',
        comments: []
        }
    ]

  constructor() { }

  getPlaces(){
      return [...this.places]
  }

    getPlace(placeId: string){
         return{
            ...this.places.find(place=>{
                return place.id === placeId
            })
        }
    }

    addPlace(title: string, imageURL: string){
        this.places.push({
            title,
            imageURL,
            comments:[],
            id: this.places.length +1+""
        });
    }

    deletePlace(placeId: string){
        this.places = this.places.filter(place =>{
            return place.id !== placeId
        })
    }

}
