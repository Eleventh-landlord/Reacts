// function Profile (){
//     return (
//         <>
//           <img src="" alt="My Image" />
//           <h2>Adeleke kehinde</h2>
//           <h3>Role: AI Developer</h3>
//           <p>My aim is to be the biggest star the world has ever known</p>

//         </>
//     );
// }

// export default Profile


function Profile({ image, name, role, about }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "20px",
      width: "250px",
      textAlign: "center",
      margin: "10px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <img 
        src={image} 
        alt={name} 
        style={{ width: "100px", height: "100px", borderRadius: "50%" }} 
      />
      <h2>{name}</h2>
      <h3>{role}</h3>
      <p>{about}</p>
    </div>
  );
}

export default Profile;
