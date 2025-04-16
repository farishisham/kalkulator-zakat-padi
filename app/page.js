'use client';

import { useState } from 'react';

export default function Home() {
  const [harga, setHarga] = useState(1.5);
  const [nisab, setNisab] = useState(1306);
  const [kadar, setKadar] = useState(5);
  const [hasil, setHasil] = useState(0);
  const [kos, setKos] = useState(0);

  const nisabRM = harga * nisab;
  const nilaiHasil = hasil * harga;
  const layakZakat = nilaiHasil - kos;
  const wajibZakat = layakZakat >= nisabRM;
  const amaunZakat = wajibZakat ? (layakZakat * kadar) / 100 : 0;

  return (
    <div className="min-h-screen bg-green-50 p-6 flex flex-col items-center justify-center text-black">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl">
        <h1 className="text-2xl font-bold text-center">Kalkulator Zakat Padi</h1>
        <p className="text-xs italic text-center text-gray-500 mb-4">by HISHAM</p>

        <div className="space-y-4">
          <div>
            <label>Harga Semasa Padi (RM/KG)</label>
            <input
              type="number"
              value={harga}
              onChange={e => setHarga(parseFloat(e.target.value))}
              onFocus={e => e.target.select()}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label>Nisab Semasa Padi (KG)</label>
            <input
              type="number"
              value={nisab}
              onChange={e => setNisab(parseFloat(e.target.value))}
              onFocus={e => e.target.select()}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label>Kadar Zakat (%)</label>
            <input
              type="number"
              value={kadar}
              onChange={e => setKadar(parseFloat(e.target.value))}
              onFocus={e => e.target.select()}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label>Hasil Tuaian Padi (KG)</label>
            <input
              type="number"
              value={hasil}
              onChange={e => setHasil(parseFloat(e.target.value))}
              onFocus={e => e.target.select()}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label>Kos Tanam (RM)</label>
            <input
              type="number"
              value={kos}
              onChange={e => setKos(parseFloat(e.target.value))}
              onFocus={e => e.target.select()}
              className="w-full p-2 border rounded"
            />
          </div>

          <hr className="my-4" />

          <div className="space-y-1">
            <p><strong>Nilai Nisab:</strong> RM {nisabRM.toFixed(2)}</p>
            <p><strong>Nilai Hasil:</strong> RM {nilaiHasil.toFixed(2)}</p>
            <p><strong>Jumlah Layak Zakat:</strong> RM {layakZakat.toFixed(2)}</p>
            <p><strong>Status:</strong> {wajibZakat ? 'Wajib Zakat' : 'Tidak Wajib Zakat'}</p>
            <p><strong>Amaun Zakat:</strong> RM {amaunZakat.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
