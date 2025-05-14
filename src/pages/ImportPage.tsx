// src/pages/ImportPage.tsx
import supabase from '../lib/supabaseClient';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';


export default function ImportPage() {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setMessage(null);

    const filePath = `${Date.now()}_${file.name}`;

    const { error } = await supabase.storage
      .from('manta-images')
      .upload(filePath, file);

    if (error) {
      setMessage(`Upload failed: ${error.message}`);
    } else {
      setMessage('Upload successful!');
    }

    setUploading(false);
  };

  return (
    <div style={{ padding: '2rem', color: '#333' }}>
      <h1>Import Manta Ray Photos</h1>
      <input type="file" accept="image/*" onChange={handleUpload} disabled={uploading} />
      {uploading && <p>Uploading...</p>}
      {message && <p>{message}</p>}
    </div>
  );
}
