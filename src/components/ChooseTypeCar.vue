<template>
	<div class="container-select">
		<div class="select">
			<span>Тип транспорта</span>
			<select v-model="selectTypeCar">
				<option v-for="typeCar in getListTypeCar" :key='typeCar'>{{typeCar}}</option>
			</select>
		</div>
		<div class="checkBox">
			<div v-for="typeBody in getTypeBodyList" :key="typeBody">
				<input v-model="bodyTypeBox" :value="typeBody" type="checkbox"  class="input" @click="updateValueBodyType(typeBody)">
				<label for="inp">{{typeBody}}</label>
			</div>
		</div>
		<div class="select">
			<span>Марка</span>
			<select v-model="selectBrandCar">
				<option v-for="brandCar in getBrandList" :key='brandCar'>{{brandCar}}</option>
			</select>
		</div>
		<div class="select">
			<span>Модель</span>
			<select v-model="selectModel">
				<option v-for="modelCar in getModelCar" :key='modelCar'>{{modelCar}}</option>
			</select>
		</div>
		<div class="select-year select">
			<span>Рік</span>
			<div class="select-year__line">
				<select v-model="chooseYearFrom" :value="year">
					<option v-for="year in getYearCars" :key='year'>{{year}}</option>
				</select>
				<select v-model="chooseYearTo" :value="year">
					<option v-for="year in getYearCars" :key='year'>{{year}}</option>
				</select>
			</div>
		</div>
			
	</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';

	export default {
		name:'ChooseTypeCar',
		data() {
			return {
				bodyTypeBox: [],
			}
		},
		computed: {
			...mapGetters(['selectType','selectBrand','getTypeBodyList','typeCarList','bodyTypeCar','getListTypeCar','getBrandList','selectModelCar','getModelCar','yearFromValue','yearToValue','getYearCars']),
			selectTypeCar:{
				get(){
					return this.selectType
				},
				set(val){
					this.updateAutoType(val)
				}
			},
			setTypeCar:{
				get(){
					return this.bodyTypeCar
				},
				set(val){
					this.setBodyType(val)
				}
			},
			selectBrandCar:{
				get(){
					return this.selectBrand
				},
				set(val){
					this.setBrandCar(val)
				}
			},
			selectModel:{
				get(){
			return	this.selectModelCar},
			set(val){
				this.setModelCar(val)
			}
			},
			chooseYearFrom:{
				get(){
					return this.yearFromValue
				},
				set(val){
					this.setYearFrom(val)
				}
			},
			chooseYearTo:{
				get(){
					return this.yearToValue
				},
				set(val){
					this.setYearToValue(val)
				}
			}

		},
		methods: {
			...mapActions(["updateAutoType","setBodyType",'setBrandCar','setModelCar','setYearFrom','setYearToValue']),

			updateValueBodyType(typeBody){
				this.setBodyType(typeBody)
			}
		},

	}
</script>

<style lang="scss" scoped>
.container-select{
	display: flex;
	flex-direction: column;
	gap: 30px;
	border: 1px solid black;
	padding: 15px;
}

.checkBox{
	display: flex;
	flex-direction: column;
	gap: 10px;
}
.select{
	display: flex;
	flex-direction: column;
	gap: 20px;
	span{
		font-size: 20px;
		font-weight: 700;
	}
}
.select-year {
	display: flex;
	flex-direction: column;
	align-items: center;
	select{
		font-size: 18px;
	}
	span{
		align-self: flex-start;
	}
		// .select-year__line
		&__line {
			display: flex;
			gap: 20px;
			option{
				font-size: 18px;
			}
		}
}

</style>