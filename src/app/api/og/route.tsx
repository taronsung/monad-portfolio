import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          fontFamily: 'monospace',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#141414',
            borderRadius: '12px',
            border: '1px solid rgba(131, 110, 249, 0.3)',
            width: '1100px',
            height: '550px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 16px',
              gap: '8px',
              borderBottom: '1px solid rgba(131, 110, 249, 0.1)',
            }}
          >
            <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
            <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
            <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#27ca3f' }} />
            <div style={{ flex: 1, textAlign: 'center', color: '#71717a', fontSize: '14px' }}>
              taronsung@monad ~ %
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              padding: '40px',
              gap: '24px',
            }}
          >
            <div style={{ display: 'flex', fontSize: '20px' }}>
              <span style={{ color: '#836EF9' }}>visitor@monad</span>
              <span style={{ color: '#71717a' }}>:~$</span>
              <span style={{ color: '#e4e4e7', marginLeft: '8px' }}>cat about.md</span>
            </div>

            <div
              style={{
                fontSize: '80px',
                fontWeight: 'bold',
                color: '#e4e4e7',
                letterSpacing: '-2px',
              }}
            >
              TARON
            </div>

            <div
              style={{
                width: '400px',
                height: '4px',
                background: 'linear-gradient(90deg, rgba(131,110,249,0.3), rgba(131,110,249,0.8), rgba(131,110,249,0.3))',
                borderRadius: '2px',
              }}
            />

            <div style={{ fontSize: '24px', color: '#836EF9' }}>
              Technical Writer | Blockchain Engineer | Korea Bridge
            </div>

            <div style={{ fontSize: '18px', color: '#71717a' }}>
              Author of KIP-87 & EIP-5865 | Monad Technical Writer
            </div>

            <div style={{ fontSize: '16px', color: '#52525b' }}>
              github.com/taronsung | taronsung@gmail.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
