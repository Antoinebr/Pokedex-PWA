<template>
    <header>
        <nav id="menu">
     
            <ul>
                <li class="left 1"><router-link to ='/' > List </router-link></li>
                <li class="right 2"><router-link to ='/team' > Team </router-link></li>
            </ul>
            <div class="clear"></div>
        </nav>
    </header>
</template>

<script>

export default {
    name: 'poke-header',
}
</script>

<style>
#menu li{ height: 50px;} 

#menu li .router-link-exact-active {
    display: block; 
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 2px solid white;
    padding: 0px;
    box-sizing: border-box;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
</style>
