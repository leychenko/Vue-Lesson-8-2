<template>
	<div  v-for="car in carDataInfo" :key="car.id" class="container-item item">
		<div class="item__img">
				<img :src="car.image" >
			</div>
		<div class="item__body">
			<div class="item__head">
				<div class="item__title">{{car.brand}} {{ car.model }} {{car.year}}</div>
				<div class="item__price">{{car.price}}$ </div>
			</div>
			<div class="item__info">
				<div>{{car.range}} тис.км</div>
				<div>{{car.location}}</div>
				<div>{{car.engine}}</div>
				<div>{{car.transmission}}</div>
			</div>
		</div>
	</div>
</template>



<script>
	export default {
		name:"ComponentsItem",
		props: {
			carDataInfo: {
				type: Array,
				default: ()=>[]
			},
		},
		
	}
</script>

<style lang="scss" scoped>
.container-item {
}
.item {
	display: flex;
	cursor: pointer;
	max-width: 650px;
	padding: 5px;
	gap: 20px;
	border: 1px solid black;
		// .item__img
		&__img {
			flex: 0 1 45%;
			img{
				max-width: 100%;
			}
		}
		// .item__body
		&__body {
			display: flex;
			flex-direction: column;
			gap: 15px;
			padding:10px;
		}
		// .item__head
		&__head {
		}
		// .item__title
		&__title {
			font-size: 28px;
			font-weight: 700;
			color: rgba(21, 21, 245, 0.733);
			&:not(:last-child) {
				margin-bottom: 15px;
			}
		}
		// .item__price
		&__price {
			font-size: 25px;
			color: green;
		}
		// .item__info
		&__info {
			display: grid;
			grid-template-columns: repeat(2,auto);
			column-gap: 30px;
			row-gap: 10px;
			font-size: 17px;
			color: rgb(90, 90, 90);
			font-weight: 700;
		}
}

</style>