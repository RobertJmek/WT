function tema1(arr)
        {
            const pare = arr.filter(el => el % 2 === 0);
            const impare = arr.filter(el => el % 2 !== 0);
            const html = rendlist("PARE", pare) + rendlist("IMPARE",impare);
            document.write(html);
        }
        function rendlist(title,arr)
        {
            const items = arr.reduce((acc,el) => acc + `<li>${el}</li>`,'')
            return `
                <h2> ${title} </h2>
                <ul> ${items} </ul> `
        }
        