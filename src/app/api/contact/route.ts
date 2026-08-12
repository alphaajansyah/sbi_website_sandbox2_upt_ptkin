import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const VALID_PROGRAMS = [
  'sbi-terintegrasi',
  'ceft',
  'mapel',
  'tot',
  'pengimbasan',
  'belum-ditentukan',
  // UPT Bahasa kondisi values
  'belum-tersedia',
  'sudah-tersedia-perlu-dikembangkan',
  'sudah-berjalan-ingin-meningkatkan',
  'lainnya',
];

const VALID_SCALES = [
  'pilot',
  '1-10',
  '11-50',
  '51+',
  'regional',
  'belum-ditentukan',
  // UPT Bahasa prioritas values
  'penguatan-sdm',
  'program-bahasa',
  'sertifikasi-internasional',
  'sistem-pengelolaan',
  'pengembangan-layanan',
  'pengembangan-upt-menyeluruh',
];

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatDate(): string {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Makassar',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  return new Intl.DateTimeFormat('id-ID', options).format(now) + ' WITA';
}

function buildEmailHtml(data: {
  namaLengkap: string;
  jabatan: string;
  instansi: string;
  kabupatenKota: string;
  provinsi: string;
  email: string;
  whatsapp: string;
  programDiminati: string;
  skalaPogram: string;
  pesan: string;
  submittedAt: string;
}): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:8px 12px;font-weight:600;color:#0f2318;background:#f5f4f0;width:200px;vertical-align:top;border-bottom:1px solid #e8e6df;">${escapeHtml(label)}</td>
      <td style="padding:8px 12px;color:#1c2b1e;background:#ffffff;vertical-align:top;border-bottom:1px solid #e8e6df;">${escapeHtml(value)}</td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Permintaan Konsultasi UPT Pusat Bahasa PTKIN</title>
</head>
<body style="margin:0;padding:0;background:#f5f4f0;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f4f0;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="background:#0f2318;padding:28px 32px;border-radius:8px 8px 0 0;">
              <p style="margin:0 0 4px 0;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#b8963c;">Program UPT Pusat Bahasa PTKIN</p>
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;line-height:1.3;">PERMINTAAN KONSULTASI PENGEMBANGAN UPT BAHASA</h1>
              <p style="margin:8px 0 0 0;font-size:13px;color:#8faf8a;">Submission baru melalui Website Program UPT Bahasa PTKIN.</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:28px 32px;">
              <!-- Contact Info -->
              <p style="margin:0 0 12px 0;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#b8963c;">Informasi Kontak</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e6df;border-radius:6px;overflow:hidden;margin-bottom:24px;">
                ${row('Nama Lengkap', data.namaLengkap)}
                ${row('Jabatan', data.jabatan)}
                ${row('Institusi / PTKIN', data.instansi)}
                ${row('Provinsi', data.provinsi)}
                ${row('Email', data.email)}
                ${row('Nomor WhatsApp', data.whatsapp)}
              </table>
              <!-- Programme Info -->
              <p style="margin:0 0 12px 0;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#b8963c;">Informasi Program</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e6df;border-radius:6px;overflow:hidden;margin-bottom:24px;">
                ${row('Kondisi UPT Bahasa', data.programDiminati)}
                ${row('Prioritas Pengembangan', data.skalaPogram)}
              </table>
              ${data.pesan ? `
              <!-- Message -->
              <p style="margin:0 0 12px 0;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#b8963c;">Kebutuhan & Rencana Pengembangan</p>
              <div style="background:#f5f4f0;border:1px solid #e8e6df;border-radius:6px;padding:14px 16px;margin-bottom:24px;">
                <p style="margin:0;font-size:14px;color:#1c2b1e;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.pesan)}</p>
              </div>` : ''}
              <!-- Metadata -->
              <p style="margin:0 0 12px 0;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#b8963c;">Metadata Submission</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e6df;border-radius:6px;overflow:hidden;">
                ${row('Tanggal & Waktu Submission', data.submittedAt)}
                ${row('Sumber', 'Website Program UPT Bahasa PTKIN — Briton English Education')}
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#f5f4f0;padding:16px 32px;border-radius:0 0 8px 8px;border-top:1px solid #e8e6df;">
              <p style="margin:0;font-size:11px;color:#3d4f3e;text-align:center;">Email ini dikirim secara otomatis dari Website Program UPT Bahasa PTKIN — Briton English Education</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid submission' }, { status: 400 });
  }

  // Honeypot check
  if (body.website && String(body.website).trim() !== '') {
    return NextResponse.json({ success: true });
  }

  const namaLengkap = String(body.namaLengkap ?? '').trim();
  const jabatan = String(body.jabatan ?? '').trim();
  const instansi = String(body.instansi ?? '').trim();
  const kabupatenKota = String(body.kabupatenKota ?? '-').trim();
  const provinsi = String(body.provinsi ?? '').trim();
  const email = String(body.email ?? '').trim();
  const whatsapp = String(body.whatsapp ?? '').trim();
  const programDiminati = String(body.programDiminati ?? '').trim();
  const skalaPogram = String(body.skalaPogram ?? '').trim();
  const pesan = String(body.pesan ?? '').trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    !namaLengkap || namaLengkap.length > 200 ||
    !jabatan || jabatan.length > 200 ||
    !instansi || instansi.length > 300 ||
    !provinsi || provinsi.length > 200 ||
    !email || !emailRegex.test(email) || email.length > 254 ||
    !whatsapp || whatsapp.length > 50 ||
    !programDiminati || !VALID_PROGRAMS.includes(programDiminati) ||
    !skalaPogram || !VALID_SCALES.includes(skalaPogram)
  ) {
    return NextResponse.json({ success: false, message: 'Invalid submission' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not configured.');
    return NextResponse.json(
      { success: false, message: 'Unable to send consultation request' },
      { status: 500 }
    );
  }

  const submittedAt = formatDate();
  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from: 'Program UPT Bahasa PTKIN <onboarding@resend.dev>',
      to: ['ald220486@gmail.com'],
      replyTo: email,
      subject: `Permintaan Konsultasi UPT Bahasa PTKIN — ${instansi}`,
      html: buildEmailHtml({
        namaLengkap,
        jabatan,
        instansi,
        kabupatenKota,
        provinsi,
        email,
        whatsapp,
        programDiminati,
        skalaPogram,
        pesan,
        submittedAt,
      }),
    });

    if (result.error) {
      console.error('[contact] Resend error:', result.error.name, result.error.message);
      return NextResponse.json(
        { success: false, message: 'Unable to send consultation request' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] Unexpected error sending email:', err instanceof Error ? err.message : 'unknown');
    return NextResponse.json(
      { success: false, message: 'Unable to send consultation request' },
      { status: 500 }
    );
  }
}
