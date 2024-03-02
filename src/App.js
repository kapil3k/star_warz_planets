import { useEffect, useState } from "react";
import { Pagination, Row } from "antd";
import FakeComponent from "./components/fakeComponent";
import InfoModal from "./components/infoModal";
import StarWarCard from "./components/starWarCard";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);
  const [visible, setVisible] = useState(false);
  const [residentData, setResidentData] = useState({});
  const [planetData, setPlanetData] = useState({});
  useEffect(() => fetchData(), []);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    setResidentData({});
    setPlanetData({});
  };

  const fetchData = (page = 1) => {
    setLoader(true);
    fetch(`https://swapi.dev/api/planets/?format=json&page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.results.slice(0, -2));
        setCount(res?.count);
        setPage(page);
      })
      .finally(() => setLoader(false));
  };

  const handleResident = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setResidentData(res);
        showModal();
      });
  };

  const handlePlanetInfo = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setPlanetData(res);
        showModal();
      });
  };

  return (
    <div>
      <div className="back_cover"></div>
      <div className="logo">STAR WARZ PLANETS</div>
      {loader ? (
        <FakeComponent />
      ) : (
        <StarWarCard
          planet={data}
          handleResident={handleResident}
          handlePlanetInfo={handlePlanetInfo}
        />
      )}
      {!loader && (
        <Row className="px-1 pagination" justify="center">
          <Pagination
            onChange={fetchData}
            showSizeChanger={false}
            total={count}
            current={page}
          />
        </Row>
      )}
      <InfoModal
        handleCancel={handleCancel}
        visible={visible}
        residentData={residentData}
        planetData={planetData}
      >
        {residentData?.name ? (
          <>
            <p>
              <strong>Height:</strong> {residentData?.height}
            </p>
            <p>
              <strong>Mass:</strong> {residentData?.mass}
            </p>
            <p>
              <strong>Hair Color:</strong> {residentData?.hair_color}
            </p>
            <p>
              <strong>Skin Color:</strong> {residentData?.skin_color}
            </p>
            <p>
              <strong>Eye Color:</strong> {residentData?.eye_color}
            </p>
            <p>
              <strong>Birth Year:</strong> {residentData?.birth_year}
            </p>
            <p>
              <strong>Gender:</strong> {residentData?.gender}
            </p>
            <p>
              <strong>Homeworld:</strong> {residentData?.homeworld}
            </p>
            <p>
              <strong>Films:</strong>{" "}
              {residentData?.films && residentData?.films.join(", ")}
            </p>
            <p>
              <strong>Species:</strong>{" "}
              {residentData?.species && residentData?.species.join(", ")}
            </p>
            <p>
              <strong>Vehicles:</strong>{" "}
              {residentData?.vehicles && residentData?.vehicles.length}
            </p>
            <p>
              <strong>Starships:</strong>{" "}
              {residentData?.starships && residentData?.starships.length}
            </p>
          </>
        ) : (
          <>
            <p>
              <strong>Climate:</strong> {planetData?.climate}
            </p>
            <p>
              <strong>Diameter:</strong> {planetData?.diameter}
            </p>
            <p>
              <strong>Films:</strong>{" "}
              {planetData?.films && planetData?.films.join(", ")}
            </p>
            <p>
              <strong>Gravity:</strong> {planetData?.gravity}
            </p>
            <p>
              <strong>Orbital Period:</strong> {planetData?.orbital_period}
            </p>
            <p>
              <strong>Population:</strong> {planetData?.population}
            </p>
            <p>
              <strong>Residents:</strong>{" "}
              {planetData?.residents && planetData?.residents.join(", ")}
            </p>
            <p>
              <strong>Rotation Period:</strong> {planetData?.rotation_period}
            </p>
            <p>
              <strong>Surface Water:</strong> {planetData?.surface_water}
            </p>
            <p>
              <strong>Terrain:</strong> {planetData?.terrain}
            </p>
          </>
        )}
      </InfoModal>
    </div>
  );
}

export default App;
