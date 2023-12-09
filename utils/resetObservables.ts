import { runInAction } from 'mobx';
import { scrape_default_observables } from "@/store/common/defaultObservables";


export const resetObservables = (instance: any) => {


 const allProperyNames = Object.keys(instance)


 // console.log('initial instance:', instance)
 // console.log(allProperyNames.forEach((propertyName: any) => {
 //  const propertyValue = instance[propertyName];
 //  console.log(`${propertyName}:`, propertyValue);
 // }))
 const observables = allProperyNames.filter((propertyName: any) => typeof instance[propertyName] !== 'function')
 observables.forEach((propertyName: any) => {
  instance[propertyName] = structuredClone(scrape_default_observables) // create deep copy(any changes wont affect scrape_default_observable object)
 });
 // console.log("After:", instance)
 // console.log(allProperyNames.forEach((propertyName: any) => {
 //  const propertyValue = instance[propertyName];
 //  console.log(`${propertyName}:`, propertyValue);
 // }))


}
