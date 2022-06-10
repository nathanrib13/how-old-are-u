
function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let formAno = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('Insira um valor válido (ex.:1987)')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(formAno.value)
        let img = document.createElement('img') 
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'masculino'
            if (idade >= 0 && idade < 5) {
                // criançinha
                img.setAttribute('src', 'https://media.istockphoto.com/photos/close-up-portrait-of-a-curlyhaired-baby-boy-crawling-on-bed-picture-id1142551922?k=20&m=1142551922&s=612x612&w=0&h=4gQgDnC5VXThvWHmtd3E9QMaUvwqIalQb8vi3kxwnZA=')
                img.setAttribute ('width', '300px',)
            } else if (idade < 12) {
                //criançã
                img.setAttribute('src', 'https://cdn.pixabay.com/photo/2020/11/02/11/35/child-5706430_960_720.jpg')
                img.setAttribute ('width', '300px')
            
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', 'https://cdn.pixabay.com/photo/2022/04/16/02/39/man-7135574_960_720.jpg')
                img.setAttribute ('width', '300px',)

            } else if (idade < 38) {
                //adulto
                img.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_960_720.jpg')
                img.setAttribute ('width', '300px',)
            } else if (idade < 55) {
                //coroão
                img.setAttribute('src', 'https://cdn.pixabay.com/photo/2019/11/13/13/59/man-4623801_960_720.jpg')
                img.setAttribute ('width', '300px',)
            } else if (idade < 75) {
                //idosunho
                img.setAttribute('src', 'https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_960_720.jpg')
                img.setAttribute ('width', '300px',)
            } else if (idade < 130) {
                //idosão
                img.setAttribute('src', 'https://cdn.pixabay.com/photo/2014/05/22/16/57/man-351281_960_720.jpg')
                img.setAttribute ('width', '300px',)
            } else {
                //matusalem
                img.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/11/29/06/07/skull-1867707_960_720.jpg')
                img.setAttribute ('width', '300px',)
            }

        } else {
            genero = 'feminino'
            if (idade >= 0 && idade < 5) {
                //criançinha
                img.setAttribute('src', 'https://cdn.pixabay.com/photo/2013/11/01/20/23/baby-204185_960_720.jpg')
                img.setAttribute ('width', '300px',)
            } else if (idade < 12) {
                //criança 
                img.setAttribute('src', 'https://cdn.pixabay.com/photo/2017/02/23/19/50/child-2093023_960_720.jpg')
                img.setAttribute ('width', '300px',)
            } else if (idade < 18) {
                //adolescente 
                img.setAttribute('src', 'https://cdn.pixabay.com/photo/2015/05/20/09/22/teenager-775053_960_720.jpg')
                img.setAttribute ('width', '300px',)
            } else if (idade < 38) {
                //adulta
                img.setAttribute('src', 'https://cdn.pixabay.com/photo/2018/04/27/03/51/woman-3353702_960_720.jpg')
                img.setAttribute ('width', '300px',)
            } else if (idade < 55) {
                //coroona
                img.setAttribute('src', 'https://cdn.pixabay.com/photo/2020/04/19/18/46/company-5064997_960_720.jpg')
                img.setAttribute ('width', '300px',)
            } else if (idade < 75) {
                //idosinha
                img.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/03/26/12/10/granny-1280445_960_720.jpg')
                img.setAttribute ('width', '300px',)
            } else if (idade < 120) {
                //idosona
                img.setAttribute('src', 'https://cdn.pixabay.com/photo/2014/08/13/03/22/old-lady-417174_960_720.jpg')
                img.setAttribute ('width', '300px',)
            } else {
                // medusa
                img.setAttribute('src', 'https://pixabay.com/pt/photos/cr%c3%a2nio-arrepiante-sombrio-estranho-1867707/')
            }
        }
      
        res.innerHTML = `Sua idade é de ${idade} anos e seu gênero é ${genero}`
        res.appendChild(img)
    }
}