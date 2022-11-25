import React from 'react'



const Profile = () => {
    const user = useSelector((state) => state.user?.user);
    const isAuth = localStorage.getItem("token");
  
    const dispatch = useDispatch()
    // useEffect(() => {
    //   if (isAuth) {
    //     dispatch(userCurrent());
    //   }
    //   dispatch(allShip())
    // }, [])
    const product = useSelector(state => state.product?.product)
    console.log(product)
  return (
    <div>
      <h5>name:mazen</h5>
      <h4>lastName:saada</h4>
      <h3>email:saadamazen@gmail.com</h3>
      <div className='btn_profil'>
     <button    >Delete</button>
     <button >Update</button>
     </div>
    </div>
  )
}

export default Profile