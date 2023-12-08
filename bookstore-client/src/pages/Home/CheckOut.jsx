import React, {useEffect, useState} from 'react';
import { Button, Modal } from "react-bootstrap";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";
import StaticExample from "../../components/dialogue";
import countriesData from '../../Data/Countries.json';
import statesData from '../../Data/states.json';


function CheckOut() {
  const [isChecked, setChecked] = useState(false);
  const { cartItems } = useShoppingCart();
  const [storeItems, setStoreItems] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedStates, setSelectedStates] = useState('');


  const [countriesB, setCountriesB] = useState([]);
  const [selectedCountryB, setSelectedCountryB] = useState('');
  const [selectedStatesB, setSelectedStatesB] = useState('');


  const [states, setStates] = useState([]);

  const [statesB, setStatesB] = useState([]);



  const [months, setMonths] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [years, setYears] = useState([]);
  const [showModal, setShowModal] = useState(false); 
  const [isFormValid, setIsFormValid] = useState(true);

  const handleProceedToCheckout = () => {
    if (validateForm()) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const validateForm = () => {
    // Check if any required fields are empty
    if (
      document.getElementById("FirstName").value === "" ||
      document.getElementById("LastName").value === "" ||
      document.getElementById("Email").value === "" ||
      document.getElementById("Address").value === "" ||
      selectedCountry === "" ||
      selectedStates === "" ||
      selectedStates === "" ||
      document.getElementById("Town/City").value === "" ||
      document.getElementById("Zip/Postal").value === "" ||
      document.getElementById("CreditCardNumber").value === "" ||
      document.getElementById("BillingZip").value === "" ||
      selectedMonth === "" ||
      selectedYear === "" ||
      document.getElementById("CVC").value === "" ||
      isChecked == false && (
      document.getElementById("BillingName").value === "" ||
      selectedCountryB === "" ||
      selectedStatesB === ""
      )
    ) {
      // Alert if any required fields are empty
      alert("Please fill in all the required fields.");
      return false;
    }

    // Additional validation logic can be added here if needed

    return true;
  };


  // Populate months array
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const monthsArray = Array.from({ length: 12 }, (_, index) => index + 1);
    setMonths(monthsArray);
    setYears(Array.from({ length: 10 }, (_, index) => currentYear + index)); // You can adjust the number of years as needed
  }, []);


  
  useEffect(() => {
    // Fetch data from http://localhost:5000/all-books
    fetch("http://localhost:5000/all-books")
      .then((response) => response.json())
      .then((data) => setStoreItems(data))
      .catch((error) => console.error("Error fetching data:", error));

       // Set countries from imported data
       setCountries(countriesData.map(country => country.name));
  }, []);


  useEffect(() => {
    // Fetch data from http://localhost:5000/all-books
    fetch("http://localhost:5000/all-books")
      .then((response) => response.json())
      .then((data) => setStoreItems(data))
      .catch((error) => console.error("Error fetching data:", error));

       // Set countries from imported data
       setCountriesB(countriesData.map(country => country.name));
  }, []);


  useEffect(() => {
    // Update states when selectedCountry changes
    if (selectedCountry) {
      const filteredStates = statesData
        .filter(state => state.country_name === selectedCountry)
        .map(state => ({ id: state.id, name: state.name }));
      
      setStates(filteredStates);
    }
  }, [selectedCountry]);

  useEffect(() => {
    // Update states when selectedCountry changes
    if (selectedCountryB) {
      const filteredStatesB = statesData
        .filter(state => state.country_name === selectedCountryB)
        .map(state => ({ id: state.id, name: state.name }));
      
      setStatesB(filteredStatesB);
    }
  }, [selectedCountryB]);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    setIsFormValid(true);
  };
  return (
    <div className="my-8 px-4 lg:px-24 mt-28">
      <hr/>
      <h2 className="text-3xl font-bold text-left mb-3 z-40">Customer Info</h2>
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <label htmlFor="FirstName" className="mb-0 font-bold">
            First Name
          </label>
          <input
            type="text"
            id="FirstName"
            name="FirstName"
            placeholder="Enter your first name"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="LastName" className="mb-0 font-bold">
            Last Name
          </label>
          <input
            type="text"
            id="LastName"
            name="LastName"
            placeholder="Enter your last name"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="Email" className="mb-0 font-bold">
            Email
          </label>
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="Enter your email"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
        </div>
        
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <label htmlFor="Address" className="mb-0 font-bold">
            Address
          </label>
          <input
            type="text"
            id="Address"
            name="Address"
            placeholder="Enter your address"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="SelectCountry" className="mb-0 font-bold">
            Select Country
          </label>
          <select
            id="SelectCountry"
            name="SelectCountry"
            value={selectedCountry}
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
<option value="">Select a country</option>
    {countries.map((countryName, index) => (
      <option key={index} value={countryName}>
        {countryName}
      </option>
    ))}
          </select>
          </div>
          </div>
          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <label htmlFor="Town/City" className="mb-0 font-bold">
          Town/City
          </label>
          <input
            type="text"
            id="Town/City"
            name="Town/City"
            placeholder="Enter your Town/City"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="Country/State/Province/Territory" className={`mb-0 font-bold ${states.length === 0 ? 'text-gray-500' : ''}`} >
          Country/State/Province/Territory
          </label>
          <select
            id="Country/State/Province/Territory"
            name="Country/State/Province/Territory"
            value={selectedStates}
            className={`border border-gray-300 px-3 py-2 rounded-md w-full ${states.length === 0 ? 'text-gray-500' : ''}`}
            onChange={(e) => setSelectedStates(e.target.value)}
            disabled={states.length === 0} // Disable if no states available
          >
            <option value="">Select a state/province</option>
          {states.map((state) => (
            <option key={state.id} value={state.name}>
              {state.name}
            </option>
          ))}
          </select>
          </div>
          <div>
          <label htmlFor="Zip/Postal" className="mb-0 font-bold">
          Zip/Postal
          </label>
          <input
            type="text"
            id="Zip/Postal"
            name="Zip/Postal"
            placeholder="Enter your Zip/Postal"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
        </div>
          </div>
          <h2 className="text-3xl font-bold text-left mb-3 z-40">Payment Info</h2>
          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
        <div>
          <label htmlFor="CreditCardNumber" className="mb-0 font-bold">
          Credit Card Number
          </label>
          <input
            type="text"
            id="CreditCardNumber"
            name="CreditCardNumber"
            placeholder="00001111000001111"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="BillingZip" className="mb-0 font-bold">
          Billing Zip
          </label>
          <input
            type="text"
            id="BillingZip"
            name="BillingZip"
            placeholder="Enter your Billing Zip Code"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
        </div>
        
      </div>



      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-8">
      <div>
          <label htmlFor="Month" className="mb-0 font-bold">
          Month
          </label>
          <select
            id="Month"
            name="Month"
            value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          >
                      <option value="">Select a month</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
          </select>
          </div>
        <div>
          <label htmlFor="Year" className="mb-0 font-bold">
          Year
          </label>
          <select
            id="Year"
            name="Year"
            value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          >

<option value="">Select a year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}

          </select>
          </div>
          <div>
          <label htmlFor="CVC" className="mb-0 font-bold">
          CVC
          </label>
          <input
            type="text"
            id="CVC"
            name="CVC"
            placeholder="123"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
        </div>
        
      </div>

      <h2 className="text-3xl font-bold text-left mb-3 z-40">Billing Address</h2>

      <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="mx-1"
        />
              <label htmlFor="Billing Address Same as Shipping" className="mb-4 ">
      Billing Address Same as Shipping...
      </label>
        
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        
          <div>
          <label htmlFor="BillingName" className={`mb-0 font-bold ${isChecked ? 'text-gray-500' : ''}`}>
          Billing Name
          </label>
          <input
            type="text"
            id="BillingName"
            name="BillingName"
            placeholder="John Smith"
            className={`border border-gray-300 px-3 py-2 rounded-md w-full ${isChecked ? 'text-gray-500' : ''}`}
            disabled={isChecked}
          />
        </div>
        <div>
          <label htmlFor="SelectCountry" className={`mb-0 font-bold ${isChecked ? 'text-gray-500' : ''}`}>
          Select Country
          </label>
          <select
            id="SelectCountry"
            name="SelectCountry"
            value={selectedCountryB}
            className={`border border-gray-300 px-3 py-2 rounded-md w-full ${isChecked ? 'text-gray-500' : ''}`}
            onChange={(e) => setSelectedCountryB(e.target.value)}
            disabled={isChecked}
          >
<option value="">Select a country</option>
    {countriesB.map((countryName, index) => (
      <option key={index} value={countryName}>
        {countryName}
      </option>
    ))}

          </select>
          </div>
        
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label htmlFor="Address" className={`mb-0 font-bold ${isChecked ? 'text-gray-500' : ''}`}>
            Address
          </label>
          <input
            type="text"
            id="Address"
            name="Address"
            placeholder="Enter your address"
            className={`border border-gray-300 px-3 py-2 rounded-md w-full ${isChecked ? 'text-gray-500' : ''}`}
            disabled={isChecked}
          />
        </div>
        <div>
          <label htmlFor="City" className={`mb-0 font-bold ${isChecked ? 'text-gray-500' : ''}`}>
          City
          </label>
          <input
            type="text"
            id="City"
            name="City"
            placeholder="Enter your City"
            className={`border border-gray-300 px-3 py-2 rounded-md w-full ${isChecked ? 'text-gray-500' : ''}`}
            disabled={isChecked}
          />
        </div>
        <div>
          
          <label htmlFor="Country/State/Province/Territory" className={`mb-0 font-bold ${isChecked || statesB.length === 0 ? 'text-gray-500' : ''}`}>
          Country/State/Province/Territory
          </label>
          <select
            id="Country/State/Province/Territory"
            name="Country/State/Province/Territory"
            value={selectedStatesB}
            className={`border border-gray-300 px-3 py-2 rounded-md w-full ${isChecked || statesB.length === 0 ? 'text-gray-500' : ''}`}
            onChange={(e) => setSelectedStatesB(e.target.value)}
            disabled={statesB.length === 0 || isChecked} // Disable if no states available
          >
            <option value="">Select a state/province</option>
          {statesB.map((state) => (
            <option key={state.id} value={state.name}>
              {state.name}
            </option>
          ))}
          </select>
          </div>
          <div>
          <label htmlFor="Zip" className={`mb-0 font-bold ${isChecked ? 'text-gray-500' : ''}`}>
          Zip
          </label>
          <input
            type="text"
            id="Zip"
            name="Zip"
            placeholder="00000"
            className={`border border-gray-300 px-3 py-2 rounded-md w-full ${isChecked ? 'text-gray-500' : ''}`}
            disabled={isChecked} // Disable if no states available
          />
        </div>
        <Button
            variant="success"
            className="w-100 bg-green-500"
            onClick={handleProceedToCheckout} // Call the function to show the modal
          >
            Complete Checkout and Pay
          </Button>
          <div className="fw-bold">
              Total{" $"}
              {cartItems.reduce(
                (total, cartItem) => {
                  const storeItem = storeItems.find((i) => i._id === cartItem.id);
                  return total + (storeItem?.price || 0) * cartItem.quantity;
                },
                0
              )}
            </div>
            <Modal show={showModal} onHide={handleCloseModal} centered>
          <StaticExample onHide={handleCloseModal} />
        </Modal>
          </div>
      
    </div>
  );
}

export default CheckOut;
