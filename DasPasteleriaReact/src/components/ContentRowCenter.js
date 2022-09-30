import React from 'react';
import LastUser from './LastUser';
import ProductCategory from './ProductCategory';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastUser />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <ProductCategory />

        </div>
    )
}

export default ContentRowCenter;