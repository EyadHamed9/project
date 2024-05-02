import { useState } from "react";
import { Container } from "@mui/material";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface Branch {
  txt: string;
  subscribe: string;
  renewal: string;
  year: string;
  threeMonth: string;
}

interface SubCategory {
  img: string;
  title: string;
  percentage: string;
  description: string;
  branch?: Branch[];
}

interface Props {
  subCategory: SubCategory;
}

function TableComponent({ subCategory }: Props) {
  const [showTable, setShowTable] = useState(false);

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <>
      {subCategory.branch ? (
        <Container maxWidth={"xl"} style={{ margin: "20px 0" }}>
          <div style={{ textAlign: "center" }}>
            <Image
              src="/golds.png"
              alt="logo"
              width={150}
              height={150}
              style={{ marginBottom: "10px", cursor: "pointer" }}
              onClick={toggleTable}
            />
          </div>
          {showTable && (
            <TableContainer component={Paper} dir="rtl">
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: "bold", fontSize: "20px" }} align="right">
                      اسم الفرع
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold", fontSize: "20px" }} align="right">
                      اشتراك جديد
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold", fontSize: "20px" }} align="right">
                      تجديد اشتراك
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold", fontSize: "20px" }} align="right">
                      اشتراك سنوى
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold", fontSize: "20px" }} align="right">
                      اشتراك ربع سنوى
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {subCategory.branch.map((row) => (
                    <TableRow key={row.txt}>
                      <TableCell align="right" style={{ fontSize: "16px" }}>
                        {row.txt}
                      </TableCell>
                      <TableCell align="right" style={{ fontSize: "16px" }}>
                        {row.subscribe}
                      </TableCell>
                      <TableCell align="right" style={{ fontSize: "16px" }}>
                        {row.renewal}
                      </TableCell>
                      <TableCell align="right" style={{ fontSize: "16px" }}>
                        {row.year}
                      </TableCell>
                      <TableCell align="right" style={{ fontSize: "16px" }}>
                        {row.threeMonth}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Container>
      ) : (
        <div style={{ width: "100%" }}>
          <div className="main-page">
            <div className="card-container" style={{ width: "2200px" }}>
              <div className="card" onClick={toggleTable} style={{ cursor: "pointer", padding: "50px" }}>
                <div className="qr-code">
                  <Image
                    className="qr-img"
                    src={subCategory.img}
                    alt={subCategory.title}
                    width={150}
                    height={100}
                  />
                </div>
                <div className="card-content">
                  <h3>{subCategory.title}</h3>
                  {showTable && (
                    <>
                      <p>percentage: {subCategory.percentage}</p>
                      <p>{subCategory.description}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TableComponent;
