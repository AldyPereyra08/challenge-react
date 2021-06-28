import React from 'react';


export const SearchHero = ({searchHeroData, handleChangeSearch, handleSubmitSearch}) => {

    return(
        <>
        <h2>SearchHero</h2>
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col col-lg-6">
                <form onSubmit={handleSubmitSearch}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Buscar</label>
                        <input type="text" name="search" className="form-control" onChange={handleChangeSearch} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Buscar</button>
                </form>
                </div>
            </div>
        </div>
        </>
    );
}




  
// const [url, setUrl] = useState();
// const [respuestaAPI, setRespuestaAPI] = useState({ respuesta: 'KO' });

// useEffect(async () => {
//   const consulta = await axios('');
//   console.log(consulta.data);
//   setRespuestaAPI(consulta);
// });

