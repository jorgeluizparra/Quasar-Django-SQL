<template>
    <div>
        <div class="text-h4">{{ informacoes.name }}</div>
        <div class="text-h5">{{ informacoes.room_type }} localizado no {{ informacoes.neighbourhood }}</div>
        <br>
        <div> Anfitrião: {{ informacoes.host_name }}</div>
        <div class="text-h6 text-primary"> Preço: R${{ informacoes.price }}/Noite</div>
    </div>
</template>

<script>
export default {
    props: ['informacoes']
    
}
</script>