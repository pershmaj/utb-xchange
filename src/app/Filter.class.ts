import { IUniversity } from "../../functions/src/interfaces";
import { createUniversityGroup } from "./createDom";


const Filter = {
    countries: <Set<string>> new Set(),
    spec: <Set<string>> new Set(),
    items: <IUniversity[]> [],
    filter: () =>  {
        const countryFilter= (u) => !Filter.countries.size || Filter.countries.has(u.country);

        const specFilter = (u) => (!Filter.spec.size || u.detail.speciality && u.detail.speciality.length) 
            && u.detail.speciality.filter(a => Filter.spec.has(a)).length;

        if(!!Filter.countries.size || !!Filter.spec.size) {
            return Filter.items.filter(u => countryFilter(u) && specFilter(u));
        } else {
            return Filter.items; //if filters not seted
        }
    },
    clearFilters:() => {
        for (let prop in Filter) { 
            if(Filter[prop] instanceof Set) {
                Filter[prop].empty();
            }
        }
    },
}

const FilterProxy = new Proxy(Filter, {
    set(target, prop, value) {
        if(prop in target) {
            if(target[prop] instanceof Set) { // filter properties
                target[prop].has(value) ? target[prop].delete(value) : target[prop].add(value);
                createUniversityGroup(target.filter())
            } else { // items
                target[prop] = value;
            }
            return true;
        } else {
            throw new Error(`There is no prop ${String(prop)} in Filter object`);
        }
    },
});

export default FilterProxy;