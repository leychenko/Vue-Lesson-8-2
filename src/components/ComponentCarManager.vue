<template>
    <div class="container">
        <div class="container__select">
            <choose-type-car />
        </div>
        <div class="container__cars">
            <components-item v-if="getFilterCar.length" :car-data-info="getFilterCar" />
				<div v-else class="Error">
					<p>Упс....</p>
					<p>Щось пішло не так</p>
				</div>
        </div>
		  
    </div>
</template>

<script>
import ComponentsItem from '@/components/ComponentsItem.vue'
import { mapGetters, mapActions } from 'vuex'
import ChooseTypeCar from './ChooseTypeCar.vue'

export default {
    name: 'ComponentCarManager',
    components: {
        ComponentsItem,
        ChooseTypeCar,
    },
    computed: {
        ...mapGetters(['getFilterCar']),
    },
    methods: {
        ...mapActions(['setCarToCarList']),
    },
    created() {
        this.setCarToCarList()

    },
}
</script>

<style lang="scss" scoped>
.container {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 40px;
    padding: 20px;
    // .container__select
    &__select {
    }
    // .container__cars
    &__cars {
    }
}
.Error{
	padding-top: 100px;
	text-align: center;
	font-size: 25px;
	color: red;
}
</style>
