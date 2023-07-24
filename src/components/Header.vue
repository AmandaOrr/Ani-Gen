<template>
    <header>
        <ul>
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/watch">Watch</RouterLink>
            </li>
            <li>
                <RouterLink to="/generator">Ani-Gen</RouterLink>
            </li>
            
        </ul>
    </header>
</template>

<style scoped>
header {
  padding: 20px;
}
ul {
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  font-family: 'Koulen', cursive;
  margin: 0 5%;
}
li {
  margin-left: 10px;
  margin-right: 10px;
}
li a {
  color:black;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
}

li a:hover {
  text-decoration: underline;
}
</style>