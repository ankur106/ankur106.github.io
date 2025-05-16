interface Certification {
  name: string;
  organization: string;
  date: string;
  url?: string;
}

interface CertificationsProps {
  readonly certifications: ReadonlyArray<Certification>;
}

function CertificationLink({ name, url }: { name: string; url?: string }) {
  if (!url) {
    return <span>{name}</span>;
  }

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:underline"
        aria-label={`${name} certification (opens in new tab)`}
      >
        {name}
        <span className="size-1 rounded-full bg-green-500" aria-label="Active certification indicator" />
      </a>
      <div
        className="hidden font-mono text-xs underline print:visible"
        aria-hidden="true"
      >
        {url.replace("https://", "").replace("www.", "").replace("/", "")}
      </div>
    </>
  );
}

export function Certifications({ certifications }: CertificationsProps) {
  if (certifications.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Certifications</h2>
      <div className="space-y-4">
        {certifications.map((certification, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <CertificationLink name={certification.name} url={certification.url} />
              <p className="text-gray-600">{certification.organization}</p>
            </div>
            <div className="text-gray-600">{certification.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}