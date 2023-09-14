import React from 'react';

const Personal = () => (
  <div className="w-3/4 mt-3">
    <div className="flex gap-2">
      <input type="text" placeholder="First name" />
      <input type="text" placeholder="Last name" />
    </div>
    <div className="flex gap-2">
      <input type="date" />
      <select name="stateoforigin" className="">
        <option>State of origin *</option>
        <option>Abia</option>
        <option>Adamawa</option>
        <option>Akwa Ibom</option>
        <option>Anambra</option>
        <option>Bauchi</option>
        <option>Bayelsa</option>
        <option>Borno</option>
        <option>Cross River</option>
        <option>Delta</option>
        <option>Ebonyi</option>
        <option>Edo</option>
        <option>Ekiti</option>
        <option>Enugu</option>
        <option>Gombe</option>
        <option>Imo</option>
        <option>Jigawa</option>
        <option>Kaduna</option>
        <option>Kano</option>
        <option>Katsina</option>
        <option>Kebbi</option>
        <option>Kogi</option>
        <option>Kwara</option>
        <option>Lagos</option>
        <option>Nasarawa</option>
        <option>Niger</option>
        <option>Ogun</option>
        <option>Ondo</option>
        <option>Osun</option>
        <option>Oyo</option>
        <option>Plateau</option>
        <option>Rivers</option>
        <option>Sokoto</option>
        <option>Taraba</option>
        <option>Yobe</option>
        <option>Zamfara</option>
        <option>FCT</option>
      </select>
    </div>
    <div className="flex gap-2">
      <input type="number" placeholder="BVN" />
      <input type="number" placeholder="Phone Number" />
    </div>
    <div className="flex gap-2">
      <input type="number" placeholder="ID no. (VIN/NIN)" />
      <select name="stateoforigin" className="">
        <option>State of origin *</option>
        <option>Abia</option>
        <option>Adamawa</option>
        <option>Akwa Ibom</option>
        <option>Anambra</option>
        <option>Bauchi</option>
        <option>Bayelsa</option>
        <option>Borno</option>
        <option>Cross River</option>
        <option>Delta</option>
        <option>Ebonyi</option>
        <option>Edo</option>
        <option>Ekiti</option>
        <option>Enugu</option>
        <option>Gombe</option>
        <option>Imo</option>
        <option>Jigawa</option>
        <option>Kaduna</option>
        <option>Kano</option>
        <option>Katsina</option>
        <option>Kebbi</option>
        <option>Kogi</option>
        <option>Kwara</option>
        <option>Lagos</option>
        <option>Nasarawa</option>
        <option>Niger</option>
        <option>Ogun</option>
        <option>Ondo</option>
        <option>Osun</option>
        <option>Oyo</option>
        <option>Plateau</option>
        <option>Rivers</option>
        <option>Sokoto</option>
        <option>Taraba</option>
        <option>Yobe</option>
        <option>Zamfara</option>
        <option>FCT</option>
      </select>
    </div>
    <div className="flex gap-2">
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
    </div>
  </div>
);

export default Personal;
