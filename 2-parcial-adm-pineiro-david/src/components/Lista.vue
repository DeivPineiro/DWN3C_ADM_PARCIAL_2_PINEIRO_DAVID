<template>
    <div class="container whiteBg rounded border border-success">

            <h1 class="text-center mb-5 ">Lista de compras</h1>
        <table class="table table-responsive container rounded border border-success">

            <thead>
                <tr>
                    <th scope="col"></th>
                    <th :class="vNom ? 'correcto' : 'incorrecto'" scope="col"> Ingrese nombre </th>
                    <th :class="vCant ? 'correcto' : 'incorrecto'" scope="col"> Ingrese cantidad correcta </th>
                    <th :class="vComer ? 'correcto' : 'incorrecto'" scope="col"> Ingrese comercio </th>
                    <th></th>

                </tr>
            </thead>
            <thead class="pt-4">
                <tr>
                    <th scope="col"> <button class="btn btn-outline-success" @click="agregarProducto"
                            type="button">Ingresar</button></th>
                    <th scope="col"> <input v-model="producto.nombre" class="form-control me-3" type="search"
                            placeholder="Nombre" aria-label="producto"></th>
                    <th scope="col"> <input v-model="producto.cantidad" class="form-control me-3" type="search"
                            placeholder="Cantidad" aria-label="cant"></th>
                    <th scope="col"> <input v-model="producto.comercio" class="form-control me-3" type="search"
                            placeholder="Comercio" aria-label="comercio"></th>
                            <th></th>

                </tr>
            </thead>
            <thead>
                <tr>
                    <th scope="col">Precio</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Comercio</th>
                    <th></th>
                    
                    
                </tr>
            </thead>

            <template v-if="lProductos.length === 0">

                <p class="m-3"> No hay productos ingresados </p>

            </template>
            <template v-else>
                <tbody>
                    <tr v-for="(producto) in lProductos" v-bind:key="producto.nombre" class="mb-3">

                        <th scope="col"><input v-model="producto.precio" class="form-control d-inline" type="search"
                                placeholder="Precio" aria-label="precio"></th>
                        <th scope="col" :class="producto.check ? 'green--text' : 'amber--text'">{{ producto.nombre }}</th>
                        <th scope="col" :class="producto.check ? 'green--text' : 'amber--text'">{{ producto.cantidad }}</th>
                        <th scope="col" :class="producto.check ? 'green--text' : 'amber--text'">{{ producto.comercio }}</th>
                        <th scope="col" :class="producto.check ? 'green--text' : 'amber--text'"><input v-model="producto.check"
                                class="form-check-input " type="checkbox" name="micheck" @click="prodCheck" id="listo"></th>

                    </tr>
                </tbody>
            </template>
            <button class="btn btn-outline-warning d-inline m-2" @click="calcularTotal" type="button"> Calcular</button>
            <p class="d-inline mx-2">Total: $ {{ total }}</p>



            <tr>

                
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"><button class="btn btn-outline-success d-block m-auto mb-5" @click="mostrarCompra" type="button">
                        Finalizar compra</button></th>
            </tr>


            <template v-if="mostrar">
                <tbody>

                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Comercio</th>
                        <th scope="col">Precio</th>
                    </tr>

                    <tr v-for="(producto) in lProductos" v-bind:key="producto.nombre" class="mb-3">

                        <th scope="col">{{ producto.nombre }}</th>
                        <th scope="col">{{ producto.cantidad }}</th>
                        <th scope="col">{{ producto.comercio }}</th>
                        <th scope="col">$ {{ producto.precio }}</th>

                    </tr>
                </tbody>

                <p class="m-4">Total de la compra: $ {{ total }}</p>

            </template>





        </table>
    </div>
</template>

<script>

export default {
    name: 'listaComp',

    data: () => {

        return {

            producto: {

                nombre: '',
                cantidad: '',
                comercio: '',
                precio: '0',
                check: false
            },

            lProductos: [],
            vNom: true,
            vCant: true,
            vComer: true,
            total: 0,
            mostrar: false


        }
    },

    methods: {

        agregarProducto: function () {

            console.log("Entro")

            if (this.producto.nombre.length === 0) {

                this.vNom = false
                return


            }
            if (this.producto.cantidad.length === 0) {

                this.vCant = false
                return


            }
            if (this.producto.comercio.length === 0) {

                this.vComer = false
                return


            }

            if (this.producto.nombre.length !== 0 && this.producto.cantidad.length !== 0 && this.producto.comercio.length !== 0) {


                this.lProductos.push({

                    nombre: this.producto.nombre,
                    cantidad: this.producto.cantidad,
                    comercio: this.producto.comercio,
                    precio: 0,
                    check: false

                })


                this.producto.nombre = ''
                this.producto.cantidad = ''
                this.producto.comercio = ''
                this.vNom = true
                this.vCant = true
                this.vComer = true


            }

        },

        calcularTotal: function () {
            this.total = 0
            this.lProductos.forEach(element => {
                this.total = parseInt(this.total) + parseInt(element.precio)
            });

        },


        prodCheck: function () {


            if (this.check) {

                this.producto.check = false

            } else {

                this.producto.check = true

            }


        },

        mostrarCompra: function () {
            this.total = 0
            this.lProductos.forEach(element => {
                this.total = parseInt(this.total) + parseInt(element.precio)
            });
            this.mostrar = true


        }




    }
}
</script>

<style>

.whiteBg{

    background-color: whitesmoke;


}

</style>