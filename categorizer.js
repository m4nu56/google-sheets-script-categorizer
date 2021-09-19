
const relation_category = {
  "Dons": ["LA CROIX ROUGE"],
  "Impôts Taxe Foncière": ["IMPOT TF"],
  "Impôts Taxe Habitation": ["IMPOT TH"],
  "Alimentation": ["NATURALIA", "PETIT ST MARTIN", "BOURGEAIS SAINT-MARTIN-D", "SUPER U", "CIE ANGLAISE THE BAYONNE", "LIDL", "FIRMIN", "CARREFOUR", "BOULANGERIE", "L EAU VIVE", "E.LECLERC", "A L'OMBRE DES PA", "DUMERCQ", "COMPAGNIE ANGLAI"],
  "Santé": ["DOCTEUR", "AX BIO OCEAN", "DR DEBES", "DOCTOLIB", "FERRER", "DR MEHAUD", "LAHITETE HUGO"],
  "Eau": ["REGIE DU SYDEC"],
  "Pharmacie": ["PHIE DU CTRE BOURG", "PHARMACIE"],
  "Marché": ["LES TRESORS DU P ST VINCEN", "LE FIN COUTEAU"],
  "Assurance Habitation": ["PACIFICA DU CONTRAT MULTIRISQUES HABITATION"],
  "Mutuelle": ["SWISSLIFE PREVOYANCE ET SANTE PR", "HENNER GMC"],
  "Frais bancaires": ["FRAIS TENUE DE COMPTE"],
  "Epargne PEL": ["MENS.PEL"],
  "Prêt Auto": ["WEB BALPE EMMANUEL BOURS BOURSOR"],
  "Entretien véhicules": ["COFIDIS FRANCE GEC-01 20210906 PLV ECHEANCE"],
  "Energies": ["TotalEnergies Electricite et Gaz Prelevement", "TOTAL DIRECT ENERGIE Prelevement Total Direct"],
  "Assurances auto": ["MATMUT ROUEN", "COTISATION D'ASSURANCE PACIFICA DU CONTRAT AUTOMOBILE 4 ROUES"],
  "Assurance Prêt CA": ["SAS MULTI IMPACT Assurance de pret"],
  "Entretien Chaudière": ["ENGIE Home Services"],
  "Prêt CA": ["REMBOURSEMENT DE PRET"],
  "Retrait": ["EUSKAL MONETA", "RETRAIT AU DISTRIBUTEUR", "RETRAIT AU DISTRIBUTEUR"],
  "Repas boulot": ["FOURNEE DE LOUIS BIDART", "SARL KERNETO BIARRITZ", "TOCO 64", "EURL BASIK", "CFPA", "TRAITEUR CARLIER"],
  "Carburant": ["STATION U 40", "LECLERC VL", "STATION U"],
  "Salaire Manu": ["SOPHIA GENETICS Virement", "SOPHIA GENETICS EINV"],
  "Téléphone": ["SFR SFR mobile Prlvt", "Bouygues Telecom 06xxxxx344"],
  "Loisirs": ["PANDACRAFT", "CULTURA"],
  "Péages": ["Autoroutes du Sud de la France", "AUTOROUTES DU SUD DE LA FRANCE"],
  "Internet": ["Bouygues Telecom 09xxxxx271"],
  "Sorties": ["LE CHAUDRON", "PITAYA"],
  "Netflix": ["Netflix.com Amsterdam", "GOOGLE Google Play A", "NETFLIX.COM", "NETFLIX COM"],
  "Bien-être": ["C-DERMA", "HARDOY ELODIE"],
  "CPAM": ["C.P.A.M."],
  "Sport": ["CLUB 64", "DECATHLON"],
  "Tabac": ["BRUN MICHEL"],
  "Ecole + périscolaire + cantine": ["TRES. SAINT-MARTIN-DE-SEIGNANX PRELEVEMENTFACTURATION"],
  "Habillement": ["CHAUSSEA", "KIABI", "MGP*Vinted", "GEMO", "BESSON"],
  "Logement": ["LEROY MERLIN"]
}

function setCategory() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  for (var i = 0; i < data.length; i++) {
      var label = data[i][4];
      if(data[i][3]==""){
        for(const category in relation_category){
          const relations = relation_category[category];
          if(relations.some(relation => label.includes(relation))){
            Logger.log("category for label: " + label + ":" + data[i][2] + " has been found: \"" + category + "\" with value: \"" + relations.find(r => label.includes(r)) + "\"");
            sheet.getRange(i+1, 4).setValue(category);
          }
        }
      }
  }

  
}
