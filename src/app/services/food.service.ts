import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_BY_SEARCH_URL, FOODS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClientModule) { }
  getAll():Food[]{
    return sample_foods
  }

  // getAll(): Observable<Food[]>{
  //   return this.http.get<Food[]>(FOODS_URL)
  // }

  getAllFoodBySearchTerm(searchTerm:string){
     return this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }


  // getAllFoodBySearchTerm(searchTerm:string){
  //   return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm)
  // }
  // getAllTags():Tag[]{
  //   return sample_tags;
  // }
  // getAll
 getFoodById(foodId:string):Food{
  return this.getAll().find(food=>food.id = foodId) ?? new Food();
 }

 getAllTags():Tag[]{
  return sample_tags
 }

  getAllFoodByTag(tag:string):Food[]{
    return tag === "All"?
      this.getAll():
    this.getAll().filter(food=>food.tags?.includes(tag));
  }

}
