const moment = require('moment');

module.exports = (data) => {
    return `
    <!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Page Title</title>
    <style>
        body {
            margin: 0;
            padding: 0;
        }

        .padding15 {
            padding: 10px;
        }

        p {
            font-size: 8px;
            margin: 0;
        }

        .full-width {
            width: 100%;
        }

        .logo {
            width: 125px;
            height: 65px;
        }

        .to-top {
            vertical-align: top;
        }

        .big {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            font-size: 10px;
        }

        .green {
            color: rgb(32, 160, 53);
        }

        .blue-line {
            padding: 3px;
            width: 100%;
            background-color: rgb(170, 249, 255);
            text-align: center;
            font-size: 10px;
        }

        .blue-text {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 12px;
            color: rgb(9, 146, 180);
            margin: 6px 0 0 0;
        }

        .square {
            width: 170px;
            height: 170px;
        }

        .main-table {
            margin: 10px 0;
            border: 1px solid black;
            border-collapse: collapse;
        }

        .main-table td {
            border: 1px solid black;
            border-collapse: collapse;
        }

        .main-table tr {
            border: 1px solid black;
            border-collapse: collapse;
        }

        .main-table p {
            border: 1px solid black;
            padding: 4px;
        }

        .range {
            padding: 1px;
            background-color: rgb(175, 246, 255);
            font-size: 8px;
        }

        .result {
            margin: 8px 2px;
            font-size: 9px;
        }

        .ma-blue {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 12px;
            color: rgb(9, 146, 180);
            margin: 6px 0;
        }
        .marg {
            margin: 6px 0;
        }
    </style>
</head>

<body>
    <div class="padding15">

        <table class="full-width">
            <tr class="to-top">
                <td><img class="logo" src="file:${__dirname}/logo.png" alt=""></td>
                <td>
                    <p>229 49th Street</p>
                    <p>Brooklyn, NY 11220-1708</p>
                    <p>Tel. (718) 788-3840</p>
                    <p>Fax. (718) 788-3871</p>
                </td>
                <td>
                    <p class="big">Dr. Fermina Mazzella</p>
                    <p>Laboratory Director</p>
                    <p>CLIA No: 33D1057336</p>
                </td>
            </tr>
            <tr>
                <td>
                    <table>
                        <tr>
                            <td>
                                <table>
                                    <tr class="to-top">
                                        <td>
                                            <p class="green">Requested By:</p>
                                        </td>
                                        <td>
                                            <p>${data.physician}</p>
                                            <p>${data.clientName}</p>
                                            <p>${data.clientStreet}</p>
                                            <p>${data.clientState} ${data.clientZip}</p>
                                            <p>${data.clientPhone}</p>
                                        </td>
                                    </tr>
                                    <tr class="to-top">
                                        <td>
                                            <p class="green">Collection Date/Time:</p>
                                        </td>
                                        <td>
                                            <p>${moment(data.collectionDate).format("MM/DD/YYYY h:mm a")}</p>
                                        </td>
                                    </tr>
                                    <tr class="to-top">
                                        <td>
                                            <p class="green">Received Date/Time:</p>
                                        </td>
                                        <td>
                                            <p>${moment(data.receivedDate).format("MM/DD/YYYY h:mm a")}</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
                <td>
                    <table>
                        <tr class="to-top">
                            <td>
                                <p class="green">Accession#:</p>
                            </td>
                            <td>
                                <p>${data.accessionID}</p>
                            </td>
                        </tr>
                        <tr class="to-top">
                            <td>
                                <p class="green">Case#:</p>
                            </td>
                            <td>
                                <p>${data.caseNumber}</p>
                            </td>
                        </tr>
                        <tr class="to-top">
                            <td>
                                <p class="green">Patient Name:</p>
                            </td>
                            <td>
                                <p>${data.patientFirstName}</p>
                            </td>
                        </tr>
                        <tr class="to-top">
                            <td>
                                <p class="green">Date of Birth:</p>
                            </td>
                            <td>
                                <p>${moment(data.receivedDate).format("MM/DD/YYYY")}</p>
                            </td>
                        </tr>
                        <tr class="to-top">
                            <td>
                                <p class="green">Gender:</p>
                            </td>
                            <td>
                                <p>${data.gender}</p>
                            </td>
                        </tr>
                        <tr class="to-top">
                            <td>
                                <p class="green">Phone:</p>
                            </td>
                            <td>
                                <p>${data.patientPhone}</p>
                            </td>
                        </tr>
                        <tr class="to-top">
                            <td>
                                <p class="green">Final Report Date:</p>
                            </td>
                            <td>
                                <p>${moment(data.finaleDate).format("MM/DD/YYYY h:mm a")}</p>
                            </td>
                        </tr>
                        <tr class="to-top">
                            <td>
                                <p class="green">Report Print Date:</p>
                            </td>
                            <td>
                                <p>${moment(data.printDate).format("MM/DD/YYYY h:mm a")}</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <div class="blue-line">
            UroVysion Report
        </div>
        <p class="blue-text">Urine: ${data.abnormalStatus}</p>
        <table class="main-table">
            <tr class="to-top">
                <td>
                    <img class="square" src="file:/home/ubuntu/cyt_photos/cyto_archive/${data.caseNumber}.jpg" alt="">
                </td>
                <td>
                    <p class="result">Total number of cells counted: ${data.totalCells}</p>
                    <p class="result">Number of cells showing gains for 2 or more chromosomes (3,7 or 17) in the same cell:
                        ${data.cellsShowing}
                    </p>
                    <p class="result">Number of cells showing zero 9p21 signals: ${data.cellsShowingZero}</p>
                    <div class="range">Reference Range</div>
                    <p class="result">ABNORMAL >= 4 cells showing gains for 2 or more chromosomes (3,7 or 17) in the same
                        cell OR >= 12 cells showing zero 9p21 signals</p>
                    <p class="result">NORMAL
                        < 4 cells showing gains for 2 or more chromosomes (3,7 or 17) in the same cell OR < 12 cells showing zero 9p21 signals</p>
                </td>
            </tr>
        </table>
        <p class="ma-blue">Interpretation:</p>
        <p>${data.interpretation}</p>

        <p class="ma-blue">Methodology:</p>
        <p class="">In situ hybridization is a technique that allows the visualization of specific nucleic acid sequences
            within a cellular preparation. Specifically, DNA fluorescence in situ hybridization (FISH) involves the precise
            annealing of a single stranded fluorescently labeled DNA probe to complementary target sequences. The hybridization
            of the probe with the cellular DNA site is visible by diretion detection using fluorescence microscopy. The UroVysion
            probes are fluorescently labeled nucleic acid probes for use in situ hybridization assays on urine specimens
            fixed on slides. The UroVysion kit consists of a 4-color, 4-probe mixture of DNA probe sequences homologous to
            specific regions on chromosomes 3,7,9 and 17. The UroVysion probe mixture consists of Chromosome Enumeration
            Probe (CEP) 3 SpecturmRed, CEP 7 SpectrumGreen, CEP 17 SpectrumAqua and Locus Specific Identifier (LSI) 9p21
            SpectrumGold. The probes are pre-mixed and predenatured in hybridization buffer for ease of use. Unlabeled blocking
            DNA is also included with the probes to suppress sequences contained within the target loci that are common to
            other chromosomes. When hybridized and visualized, these probes provide information on chromosome copy number
            for chromosome ploidy enumeration. This UroVysion Kit is designed for the detection and quantification of chromosomes
            3,7, and 17, and 9p21 locus in human urine specimens by FISH.</p>

        <p class="ma-blue">Intended Use:</p>
        <p class="">The UroVysion Bladder Cancer Kit (UroVysion Kit) is designed to detect aneuploidy for chromosomes 3,7,17
            and loss of the 9p21 locus via fluorescence in situ hybridization (FISH) in urine specimens from persons with
            hematuria suspected of having bladder cancer. Results from the UroVysion Kit are inteded for use, in conjunction
            with and not in lieu of current standard diagnostic procedures, as an aid for initial diagnosis of bladder carcinoma
            in patients wtih hematuria and subsequent monitoring for tumor recurrence in patients previously diagnosed with
            bladder cancer.</p>
        <table class="full-width marg">
            <tr>
                <td><p>Screened by:</p></td>
                <td class="big"><p>${data.screenedBy}</p></td>
            </tr>
            <tr>
                <td><p>Reviewed and Electronically Signed by:</p></td>
                <td><p class="big">${data.signedBy}</p></td>
            </tr>
        </table>
    </div>
</body>

</html>
    `;
}