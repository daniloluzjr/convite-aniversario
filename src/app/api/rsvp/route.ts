import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, guests, attending = 'yes', message = '' } = body;

    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'O nome é obrigatório' },
        { status: 400 }
      );
    }

    const guestsCount = Number(guests) || 1;
    const targetEmail = process.env.RSVP_TARGET_EMAIL || 'daniloluz@aim.com';
    const isAttending = attending === 'yes';

    // HTML Email Template matching invitation aesthetic
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #f1edea; color: #34403c; padding: 24px; margin: 0; }
            .container { max-width: 520px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; padding: 32px; box-shadow: 0 4px 16px rgba(0,0,0,0.06); border: 1px solid #e8e3de; }
            .header { text-align: center; border-bottom: 1px solid #e8e3de; padding-bottom: 20px; margin-bottom: 24px; }
            .title { font-size: 22px; font-weight: 600; color: #34403c; margin: 0 0 6px 0; }
            .subtitle { font-size: 13px; color: #667470; text-transform: uppercase; letter-spacing: 0.15em; margin: 0; }
            .badge { display: inline-block; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 600; margin-top: 12px; }
            .badge-yes { background-color: #e6f4ea; color: #137333; }
            .badge-no { background-color: #fce8e6; color: #c5221f; }
            .details { margin: 24px 0; background-color: #f9f8f6; border-radius: 8px; padding: 18px; }
            .row { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 15px; }
            .row:last-child { margin-bottom: 0; }
            .label { color: #667470; }
            .value { font-weight: 600; color: #34403c; }
            .message-box { margin-top: 20px; padding: 16px; background-color: #f6f3f0; border-left: 3px solid #5f6f6c; border-radius: 4px; }
            .message-label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #667470; margin-bottom: 6px; }
            .message-text { font-size: 14px; font-style: italic; color: #34403c; margin: 0; }
            .footer { text-align: center; font-size: 11px; color: #999; margin-top: 24px; border-top: 1px solid #eee; padding-top: 16px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <p class="subtitle">Confirmação de Presença</p>
              <h1 class="title">Ximena &amp; Rafael</h1>
              <span class="badge ${isAttending ? 'badge-yes' : 'badge-no'}">
                ${isAttending ? '✓ Presença Confirmada' : '✗ Não poderá comparecer'}
              </span>
            </div>

            <div class="details">
              <div class="row">
                <span class="label">Convidado(a):</span>
                <span class="value">${name}</span>
              </div>
              <div class="row">
                <span class="label">Pessoas confirmadas:</span>
                <span class="value">${guestsCount} ${guestsCount === 1 ? 'pessoa' : 'pessoas'}</span>
              </div>
              <div class="row">
                <span class="label">Data de envio:</span>
                <span class="value">${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</span>
              </div>
            </div>

            ${
              message
                ? `
              <div class="message-box">
                <div class="message-label">Mensagem para os noivos:</div>
                <p class="message-text">"${message}"</p>
              </div>
            `
                : ''
            }

            <div class="footer">
              Enviado automaticamente pelo Convite Digital de Casamento
            </div>
          </div>
        </body>
      </html>
    `;

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const emailResult = await resend.emails.send({
        from: 'Convite de Casamento <onboarding@resend.dev>',
        to: [targetEmail],
        subject: `💍 Confirmação de Presença: ${name} (${guestsCount} ${guestsCount === 1 ? 'pessoa' : 'pessoas'})`,
        html: emailHtml,
      });

      console.log('Resend email sent:', emailResult);
      return NextResponse.json({ success: true, emailResult });
    } else {
      // Development mode / when API key is not yet set
      console.log('--- [SIMULAÇÃO DE ENVIO DE EMAIL RSVP] ---');
      console.log(`Para: ${targetEmail}`);
      console.log(`Assunto: Confirmação de Presença: ${name} (${guestsCount} pessoas)`);
      console.log(`Status: ${isAttending ? 'Confirmado' : 'Não comparecerá'}`);
      console.log(`Mensagem: ${message || '(nenhuma)'}`);
      console.log('-------------------------------------------');

      return NextResponse.json({
        success: true,
        simulated: true,
        message: 'Confirmação registrada (modo de teste local)',
      });
    }
  } catch (error: any) {
    console.error('Error processing RSVP:', error);
    return NextResponse.json(
      { error: error?.message || 'Falha ao processar confirmação' },
      { status: 500 }
    );
  }
}
