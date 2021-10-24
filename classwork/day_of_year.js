function dayOfYear(str) {
	
    const splited = str.split('/');
    const year = splited[splited.length - 1];

    return (new Date(str) - new Date(`01/01/${year}`))/1000/3600/24 + 1;
}
