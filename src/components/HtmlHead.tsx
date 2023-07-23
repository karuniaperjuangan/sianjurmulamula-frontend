import { Helmet } from "react-helmet";

export default function HtmlHeader({ title="Sianjur Mula-Mula", description="Sianjur Mula-mula adalah sebuah kecamatan yang berada di Kabupaten Samosir, provinsi Sumatera Utara, Indonesia. Ibu kota kecamatan ini berada di desa Ginolat. Sianjur Mulamula terletak di jalan utama yang menghubungi Doloksanggul dan Sidikalang." }) {
  return (
    <Helmet>
      <title>{`${title} - Sianjur Mula-Mula`}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
