import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRow from './ContentRow';
import Table from './Table';

function ContentRowTop({cbc, products, users, lastProduct}){
	
 
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard - TeapotHouse</h1>
					</div>
				
					{/*<!-- Content Row -->*/}
					<ContentRow productsCount={products.length} categoryCount={cbc.length} usersCount={users.count}/>
					<ContentRowCenter cbc={cbc} lastProduct={lastProduct}/>
					<Table products={products}/>
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;