import soporteTI from "./images/soporteTI.png";
import dasavenaLogo from "./images/dasavenaLogo64px.png";
import equipoComputo from "./images/equipoComputo.png";
import permisos from "./images/permisosRH.png";
import pagos from "./images/pagos.png";
import mantenimiento from "./images/mantenimiento.png";
import cajaChica from "./images/cajaChica.png";
import mercancia from "./images/mercancia.png";
import qrCode from "./images/qrCode.png";
import lider from "./images/liderEquipo.png";
import cursos from "./images/cursos.png";
import powerbi from "./images/powerBi.png";
import walmart from "./images/walmart.png";
import shopify from "./images/shopify.png";
import factura from "./images/factura.png";
import masteredi from "./images/masteredi.png";
import sharePoint from "./images/sharePoint.png";


const apps = [
  {
    image: soporteTI,
    title: "Soporte de TI",
    description:
      "Accede a este formulario para obtener asistencia técnica personalizada del departamento de sistemas, asegurando una atención eficiente y de calidad.",
    url: "https://forms.office.com/Pages/ResponsePage.aspx?id=dGXF5BbBAE28_ZXHcWcv_Lcs0f3SibNOvBMHQxEo7xJUQlVOUzVHMkZIQks1RDNISUxSMk5OVUw0Ui4u",
  },
  {
    image: equipoComputo,
    title: "Solicitud de Equipos",
    description:
      "Completa este formulario para solicitar equipos electrónicos, como computadoras, celulares, monitores, y otros dispositivos tecnológicos.",
    url: "https://forms.office.com/pages/responsepage.aspx?id=dGXF5BbBAE28_ZXHcWcv_Lcs0f3SibNOvBMHQxEo7xJUNkVFRlRZMERFVERQOEZCVDZYV0RaSFkzRi4u&route=shorturl",
  },
  {
    image: pagos,
    title: "Pagos Dasavena",
    description:
      "Administra y controla los pagos a proveedores de manera fácil y segura desde la plataforma web.",
    url: "https://pagos.dasavena-intranet.com/",
  },

  {
    image: permisos,
    title: "Permisos e Incidencias",
    description:
      "Aplicación para gestionar solicitudes de permisos de entrada y salida, además del control de ausencias y vacaciones.",
    url: "https://yetholi.nyc.dom.my.id/login",
  },

  {
    image: mantenimiento,
    title: "Solicitud Mantenimiento",
    description:
      "Accede a la app para obtener asistencia del departamento de mantenimiento, asegurando una atención eficiente y de calidad.",
    url: "https://apps.powerapps.com/play/e/default-e4c56574-c116-4d00-bcfd-95c771672ffc/a/88b22376-4681-44f4-b55d-8c7b691f293d?tenantId=e4c56574-c116-4d00-bcfd-95c771672ffc&hint=927e26f8-46bc-40ae-81fc-961e69fb44a7&sourcetime=1729725403741&source=portal",
  },

  {
    image: cajaChica,
    title: "Solicitud Caja Chica",
    description: "Accede a la aplicación para realizar solicitudes de dinero a la administración de forma rápida y sencilla.",
    url: "https://apps.powerapps.com/play/e/default-e4c56574-c116-4d00-bcfd-95c771672ffc/a/35c6e036-bb05-44cf-b655-4ed05a20d22c?tenantId=e4c56574-c116-4d00-bcfd-95c771672ffc&hint=42bdae80-568e-4d01-a2d9-8a4a88a434a0&sourcetime=1729786695917&source=portal",
  },
  {
    image: mercancia,
    title: "Recepción y Envío de Mercancía",
    description:
      "Aplicación para levantar incidencias relacionadas con la entrada y salida de mercancías de la empresa.",
    url: "https://apps.powerapps.com/play/e/default-e4c56574-c116-4d00-bcfd-95c771672ffc/a/d7ed9613-6324-49b8-9ecc-4a8a5da3b959?tenantId=e4c56574-c116-4d00-bcfd-95c771672ffc&hint=8c500c7f-87ac-45ca-b56b-e6e570f64c51&sourcetime=1729715647979&source=portal",
  },

  {
    image: qrCode,
    title: "Activos QR",
    description:
      "Aplicación web para guardar los datos de los activos de la empresa y generar un QR para cada uno de ellos.",
    url: "https://logisticaqr.domcloud.dev/",
  },
  {
    image: lider,
    title: "Líderes Dasavena",
    description:
      "Encuesta diseñada exclusivamente para los líderes de la empresa, enfocada en obtener perspectivas clave y promover el desarrollo estratégico del equipo directivo.",
    url: "https://lideres.dasavena-intranet.com/",
  },

  {
    image: cursos,
    title: "Cursos SGI",
    description:
      "Cursos y capacitaciones diseñados para el desarrollo del personal interno de la empresa.",
    url: "https://cursos.dasavena-intranet.com/courses/",
  },
  {
    image: powerbi,
    title: "Power BI",
    description:
      "Accede a la plataforma de análisis de datos empresariales para visualizar informes interactivos y obtener insights estratégicos basados en tus datos.",
    url: "https://app.powerbi.com/home?experience=power-bi",
  },
  {
    image: walmart,
    title: "Retail Link Walmart",
    description:
      "Plataforma para proveedores de Walmart que permite acceder a información crítica de ventas, inventario y análisis para optimizar la cadena de suministro.",
    url: "https://retaillink.login.wal-mart.com/?resumePath=/as/TGS3cMJrrR/resume/as/authorization.ping",
  },
  {
    image: shopify,
    title: "Shopify",
    description:
      "Plataforma e-commerce que nos permite gestionar nuestras ventas en línea, centralizar el inventario y obtener análisis detallados en tiempo real.",
    url: "https://www.shopify.com/login",
  },
  {
    image: factura,
    title: "Mas Factura Web",
    description:
      "Plataforma en linea para la emision y gestion rapida y sencilla de facturas.",
    url: "https://www.masfacturaweb.com.mx/Servicio/adminClientes.aspx",
  },
  {
    image: masteredi,
    title: "Masteredi",
    description: "Accede a Masteredi para consultar de manera rápida y eficiente los pagos recibidos de clientes en el área de cuentas por cobrar.",
    url: "https://masteredi-app-portalweb-prod.azurewebsites.net/Login/Index?ReturnUrl=%2f",
  },  
  {
    image: sharePoint,
    title: "Share Point Dasavena",
    description: "Plataforma de colaboración que permite gestionar documentos, compartir información y coordinar proyectos dentro de la organización.",
    url: "https://dasavenagourmet123.sharepoint.com/sites/Dasavena/SitePages/TrainingHome.aspx",
  },
  
];

export default apps;
