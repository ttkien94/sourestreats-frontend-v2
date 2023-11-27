import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
function QRScanCode(props) {
  const [data, setData] = useState("");
  const [torchOn, setTorchOn] = useState(false);
  return (
    <div>
      <BarcodeScannerComponent
        width={500}
        height={500}
        torch={torchOn}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      <p>{data}</p>
      <button onClick={() => setTorchOn(!torchOn)}>
        Switch Torch {torchOn ? "Off" : "On"}
      </button>
    </div>
  );
}

export default QRScanCode;
