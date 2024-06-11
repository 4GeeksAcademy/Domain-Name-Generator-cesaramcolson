let pronouns = ["the", "my"];
let adjectives = ["great", "last", "house"];
let nouns = ["jogger", "Ofus"];
let extensions = ["com", "net", "us"];

const names = [];

for (const pronoun of pronouns) {
  for (const adj of adjectives) {
    for (const noun of nouns) {
      for (const extention of extensions) {
        let domainName = pronoun + adj + noun;
        if (domainName.endsWith(extention)) {
          domainName = domainName.slice(
            0,
            domainName.length - extention.length
          );
        }
        names.push(`${domainName}.${extention}`);
      }
    }
  }
}

console.log("Generated Domain Names: ");
for (const name of names) {
  console.log(name);
}
