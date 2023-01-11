import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Products in DB --> */

let productsInDb = {
    title: 'Productos Cargados',
    color: 'info', 
    quantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Users quantity --> */

let usersInDb = {
    title:'Usuarios Registrados' ,
    color:'info',
    quantity:'49',
    icon:'fa-user-check'
}
/* <!-- Categories awards --> */

let categoriesInDb = {
    title:'Categorías', 
    color:'info', 
    quantity: '79',
    icon:'fa-award'
}


let cartProps = [productsInDb, usersInDb, categoriesInDb];

function ContentRow({productsCount, usersCount, categoryCount}){
    const arr = [productsCount, usersCount, categoryCount]
    const cards = cartProps.map((e, i) => {
        return {
            ...e,
            quantity: arr[i]
        }

    })

    return (
    
        <div className="row">
            
            {cards?.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRow;