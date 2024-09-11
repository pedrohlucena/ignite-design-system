interface TokensGrid {
  tokens: Record<string, string>
  hasRemValue: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGrid) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          const remValue = +value.replace('rem', '')
          const remValueInPixels = remValue * 16

          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>

              {hasRemValue && <td>{remValueInPixels}px</td>}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
