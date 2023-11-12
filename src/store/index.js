import { createStore } from "vuex";
import cars from '@/data/cars.json';
import { getValueList } from './helper'

export default createStore({
    state: {
        carList: [],
        selectType: null,
        selectBrand: null,
        selectModelCar: null,
        yearFromValue: null,
        yearToValue: null,
        bodyTypeCar: [],
        message: null,
    },
    getters: {
        carList: ({ carList }) => carList,
        yearFromValue: ({ yearFromValue }) => yearFromValue,
        yearToValue: ({ yearToValue }) => yearToValue,
        typeBodyCar: ({ typeBodyCar }) => typeBodyCar,
        typeCarList: ({ typeCarList }) => typeCarList,
        brandCarList: ({ brandCarList }) => brandCarList,
        selectType: ({ selectType }) => selectType,
        selectModelCar: ({ selectModelCar }) => selectModelCar,
        bodyTypeCar: ({ bodyTypeCar }) => bodyTypeCar,
        selectBrand: ({ selectBrand }) => selectBrand,
        message: ({ message }) => message,

        getBrandList: (state) => getValueList(state.carList, 'brandCar'),
        getListTypeCar: (state) => getValueList(state.carList, 'typeCar'),
        getTypeBodyList: (state) => getValueList(state.carList, 'bodyType'),
        getModelCar: (state) => getValueList(state.carList, 'model'),
        getYearCars: (state) => getValueList(state.carList, 'year'),

        getFilterCar: ({
            carList,
            selectType,
            bodyTypeCar,
            selectBrand,
            selectModelCar,
            yearFromValue,
            yearToValue,
        }) => {
		
            selectType ? (carList = carList.filter((car) => car.typeCar === selectType)) : carList

            bodyTypeCar.length ? (carList = carList.filter((car) => bodyTypeCar.includes(car.bodyType))) : carList

            selectBrand ? (carList = carList.filter((car) => car.brandCar === selectBrand)) : carList

            selectModelCar ? (carList = carList.filter((car) => car.model === selectModelCar)) : carList

            if (yearFromValue || yearToValue) 
				carList = carList.filter((car) => car.year === parseInt(yearFromValue )|| car.year === parseInt(yearToValue))


				return carList 
				
        },
    },
    mutations: {
        setCarToCarList(state, list) {
            state.carList = list
        },

        updateAutoType(state, val) {
            state.selectType = val
        },
        setBodyType(state, val) {
            if (state.bodyTypeCar.includes(val)) {
                state.bodyTypeCar = state.bodyTypeCar.filter((item) => item !== val)
            } else {
                state.bodyTypeCar.push(val)
            }
        },
        setBrandCar(state, brand) {
            state.selectBrand = brand
        },
        setModelCar(state, model) {
            state.selectModelCar = model
        },
        setYearFrom(state, year) {
            state.yearFromValue = year
        },
        setYearToValue(state, year) {
            state.yearToValue = year
        },
    },
    actions: {
        setCarToCarList({ commit }) {
            commit('setCarToCarList', cars)
        },
        updateAutoType({ commit }, val) {
            commit('updateAutoType', val)
        },
        setBodyType({ commit }, val) {
            commit('setBodyType', val)
        },
        setBrandCar({ commit }, val) {
            commit('setBrandCar', val)
        },
        setModelCar({ commit }, model) {
            commit('setModelCar', model)
        },
        setYearFrom({ commit }, year) {
            commit('setYearFrom', year)
        },
        setYearToValue({ commit }, year) {
            commit('setYearToValue', year)
        },
    },
    modules: {},
})
