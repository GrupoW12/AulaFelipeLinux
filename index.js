const chamar = async() => {
    const link = await fetch('http://192.168.1.119:8080/dados.json');
    const data = await link.json();
    console.log(data);
}

chamar();