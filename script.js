const ICD10_LIST = [
    // F00-F09: Organische, einschliesslich symptomatischer psychischer Störungen
    "F00 Demenz bei Alzheimer-Krankheit",
    "F01 Vaskuläre Demenz",
    "F02 Demenz bei anderenorts klassifizierten Krankheiten",
    "F03 Nicht näher bezeichnete Demenz",
    "F04 Organisches amnestisches Syndrom, nicht durch Alkohol oder andere psychotrope Substanzen bedingt",
    "F05 Delir, nicht durch Alkohol oder andere psychotrope Substanzen bedingt",
    "F06 Andere psychische Störungen aufgrund einer Schädigung oder Funktionsstörung des Gehirns oder einer körperlichen Krankheit",
    "F07 Persönlichkeits- und Verhaltensstörungen aufgrund einer Krankheit, Schädigung oder Funktionsstörung des Gehirns",
    "F09 Nicht näher bezeichnete organische oder symptomatische psychische Störung",

    // F10-F19: Psychische und Verhaltensstörungen durch psychotrope Substanzen
    "F10 Psychische und Verhaltensstörungen durch Alkohol",
    "F11 Psychische und Verhaltensstörungen durch Opioide",
    "F12 Psychische und Verhaltensstörungen durch Cannabinoide",
    "F13 Psychische und Verhaltensstörungen durch Sedativa oder Hypnotika",
    "F14 Psychische und Verhaltensstörungen durch Kokain",
    "F15 Psychische und Verhaltensstörungen durch andere Stimulanzien, einschliesslich Koffein",
    "F16 Psychische und Verhaltensstörungen durch Halluzinogene",
    "F17 Psychische und Verhaltensstörungen durch Tabak",
    "F18 Psychische und Verhaltensstörungen durch flüchtige Lösungsmittel",
    "F19 Psychische und Verhaltensstörungen durch multiplen Substanzgebrauch und Konsum anderer psychotroper Substanzen",

    // F20-F29: Schizophrenie, schizotype und wahnhafte Störungen
    "F20.0 Paranoide Schizophrenie",
    "F20.1 Hebephrene Schizophrenie",
    "F20.2 Katatone Schizophrenie",
    "F20.3 Undifferenzierte Schizophrenie",
    "F20.4 Postschizophrene Depression",
    "F20.5 Schizophrenes Residuum",
    "F20.6 Schizophrenia simplex",
    "F21 Schizotype Störung",
    "F22 Anhaltende wahnhafte Störungen",
    "F23 Akute vorübergehende psychotische Störungen",
    "F24 Induzierte wahnhafte Störung",
    "F25 Schizoaffektive Störungen",
    "F28 Sonstige nichtorganische psychotische Störungen",
    "F29 Nicht näher bezeichnete nichtorganische Psychose",

    // F30-F39: Affektive Störungen
    "F30 Manische Episode",
    "F31 Bipolare affektive Störung",
    "F32.0 Leichte depressive Episode",
    "F32.1 Mittelgradige depressive Episode",
    "F32.2 Schwere depressive Episode ohne psychotische Symptome",
    "F32.3 Schwere depressive Episode mit psychotischen Symptomen",
    "F33 Rezidivierende depressive Störung",
    "F34 Anhaltende affektive Störungen (Dysthymia / Zyklothymia)",
    "F38 Sonstige affektive Störungen",
    "F39 Nicht näher bezeichnete affektive Störung",

    // F40-F48: Neurotische, Belastungs- und somatoforme Störungen
    "F40.0 Agoraphobie",
    "F40.1 Soziale Phobien",
    "F40.2 Spezifische Phobien",
    "F41.0 Panikstörung (episodisch paroxysmale Angst)",
    "F41.1 Generalisierte Angststörung",
    "F41.2 Angst und depressive Störung, gemischt",
    "F42 Zwangsstörung",
    "F43.0 Akute Belastungsreaktion",
    "F43.1 Posttraumatische Belastungsstörung",
    "F43.2 Anpassungsstörungen",
    "F44 Dissoziative Störungen (Konversionsstörungen)",
    "F45 Somatoforme Störungen",
    "F48 Andere neurotische Störungen (z.B. Neurasthenie)",

    // F50-F59: Verhaltensauffälligkeiten mit körperlichen Störungen und Faktoren
    "F50.0 Anorexia nervosa",
    "F50.2 Bulimia nervosa",
    "F50.4 Essattacken bei anderen psychischen Störungen",
    "F51 Nichtorganische Schlafstörungen",
    "F52 Sexuelle Funktionsstörungen, nicht verursacht durch eine organische Störung oder Krankheit",
    "F53 Psychische oder Verhaltensstörungen im Wochenbett, anderenorts nicht klassifiziert",
    "F54 Psychologische Faktoren oder Verhaltensfaktoren bei anderenorts klassifizierten Krankheiten",
    "F55 Missbrauch von nichtabhängigkeitserzeugenden Substanzen",
    "F59 Nicht näher bezeichnete Verhaltensauffälligkeiten bei körperlichen Störungen und Faktoren",

    // F60-F69: Persönlichkeits- und Verhaltensstörungen
    "F60.0 Paranoide Persönlichkeitsstörung",
    "F60.1 Schizoide Persönlichkeitsstörung",
    "F60.2 Dissoziale Persönlichkeitsstörung",
    "F60.3 Emotional instabile Persönlichkeitsstörung (Impulsiver Typ / Borderline-Typ)",
    "F60.4 Histrionische Persönlichkeitsstörung",
    "F60.5 Anankastische (zwanghafte) Persönlichkeitsstörung",
    "F60.6 Ängstlich-vermeidende Persönlichkeitsstörung",
    "F60.7 Abhängige (asthenische) Persönlichkeitsstörung",
    "F61 Kombinierte und andere Persönlichkeitsstörungen",
    "F62 Andauernde Persönlichkeitsänderungen, nicht Folge einer Gehirnschädigung oder -krankheit",
    "F63 Abnorme Gewohnheiten und Störungen der Impulskontrolle",
    "F64 Störungen der Geschlechtsidentität",
    "F65 Störungen der Sexualpräferenz",
    "F66 Psychische und Verhaltensstörungen im Zusammenhang mit der sexuellen Entwicklung und Orientierung",
    "F68 Andere Persönlichkeits- und Verhaltensstörungen",

    // F70-F79: Intelligenzminderung
    "F70 Leichte Intelligenzminderung",
    "F71 Mittelgradige Intelligenzminderung",
    "F72 Schwere Intelligenzminderung",
    "F73 Schwerste Intelligenzminderung",
    "F74 Dissoziative Störungen der Intelligenz",
    "F78 Andere Intelligenzminderung",
    "F79 Nicht näher bezeichnete Intelligenzminderung",

    // F80-F89: Entwicklungsstörungen
    "F80 Umschriebene Entwicklungsstörungen des Sprechens und der Sprache",
    "F81 Umschriebene Entwicklungsstörungen schulischer Fertigkeiten (Lese-Rechtschreibstörung / Rechenstörung)",
    "F82 Umschriebene Entwicklungsstörung der motorischen Funktionen",
    "F83 Kombinierte umschriebene Entwicklungsstörungen",
    "F84.0 Frühkindlicher Autismus",
    "F84.1 Atypischer Autismus",
    "F84.2 Rett-Syndrom",
    "F84.5 Asperger-Syndrom",
    "F88 Andere Entwicklungsstörungen",
    "F89 Nicht näher bezeichnete Entwicklungsstörung",

    // F90-F98: Verhaltens- und emotionale Störungen mit Beginn in der Kindheit und Jugend
    "F90 Hyperkinetische Störungen (ADHS)",
    "F91 Störungen des Sozialverhaltens",
    "F92 Kombinierte Störung des Sozialverhaltens und der Emotionen",
    "F93 Emotionale Störungen des Kindesalters",
    "F94 Störungen sozialer Funktionen mit Beginn in der Kindheit und Jugend",
    "F95 Ticstörungen",
    "F98 Andere Verhaltens- und emotionale Störungen mit Beginn in der Kindheit und Jugend (Enuresis / Enkopresis)",

    // F99: Nicht näher bezeichnete psychische Störungen
    "F99 Psychische Störung ohne nähere Angabe"
];

const CLUES_DATABASE = {
    "F00 Demenz bei Alzheimer-Krankheit": [
        "Ein 75-jähriger Patient klagt über zunehmende Vergesslichkeit im Alltag, die seit etwa zwei Jahren schleichend zugenommen hat. Er verlegt häufiger Gegenstände und wirkt in Gesprächen manchmal etwas desorientiert bezüglich aktueller Ereignisse.",
        "Neurologische Untersuchungen schliessen einen akuten Vitaminmangel oder eine Schilddrüsenunterfunktion als Ursache für die kognitiven Defizite aus.",
        "Es zeigt sich ein deutlicher Verlust der Merkfähigkeit für neue Informationen, während Altgedächtnisinhalte noch relativ gut erhalten sind.",
        "Bildgebende Verfahren weisen eine betonte Atrophie im Bereich des Hippocampus und des temporalen Cortex auf.",
        "Die Symptomatik begann schleichend ohne fassbare vaskuläre Ereignisse und zeigt einen kontinuierlichen, progredienten Verlauf."
    ],
    "F01 Vaskuläre Demenz": [
        "Eine 68-jährige Patientin berichtet von plötzlichen Verschlechterungen ihrer geistigen Leistungsfähigkeit, die seit einem Jahr bestehen. Die Angehörigen beschreiben einen stufenweisen Verlauf der Symptomatik.",
        "Im Gegensatz zu degenerativen Prozessen treten hier neurologische Herdsymptome wie diskrete Lähmungserscheinungen oder Gangstörungen auf.",
        "In der Anamnese finden sich langjähriger Bluthochdruck, Diabetes mellitus und bereits stattgefundene transitorische ischämische Attacken.",
        "Die kognitiven Einbussen betreffen vor allem die Exekutivfunktionen und die psychomotorische Geschwindigkeit.",
        "Die MRT zeigt multiple Infarktareale oder eine ausgeprägte Marklagergliose als Korrelat der vaskulären Schädigung."
    ],
    "F02 Demenz bei anderenorts klassifizierten Krankheiten": [
        "Ein Patient zeigt seit sechs Monaten deutliche kognitive Defizite und eine verlangsamte Informationsverarbeitung. Begleitend treten motorische Auffälligkeiten auf, die das Gehen und die Feinmotorik erschweren.",
        "Die Abklärung bezüglich einer primären Alzheimer-Demenz liefert keine eindeutigen Belege für einen rein kortikalen Abbauprozess.",
        "Es liegt eine bereits diagnostizierte neurologische Grunderkrankung vor, wie zum Beispiel Morbus Parkinson oder Chorea Huntington.",
        "Die kognitiven Symptome werden als direkte Folge oder Begleiterscheinung dieser spezifischen somatischen Krankheit gewertet.",
        "Das klinische Bild ist geprägt durch die Interaktion zwischen der neurologischen Grunderkrankung und dem demenziellen Abbau."
    ],
    "F03 Nicht näher bezeichnete Demenz": [
        "Bei einer hochbetagten Person wird ein allgemeiner Verlust der geistigen Fähigkeiten beobachtet, der die Lebensführung massiv einschränkt. Die Symptome bestehen seit über sechs Monaten, aber eine genaue Zuordnung ist bisher nicht erfolgt.",
        "Spezifische Ausschlusskriterien für vaskuläre oder neurodegenerative Ursachen können aufgrund fehlender Vorbefunde nicht sicher angewendet werden.",
        "Das Leitsymptom ist ein signifikanter Abbau von Gedächtnis und Urteilsvermögen ohne klare Ätiologie.",
        "Die Diagnose wird gestellt, wenn die Kriterien einer Demenz erfüllt sind, aber keine genauere Differenzierung möglich ist.",
        "Oft wird diese Diagnose im klinischen Alltag verwendet, wenn die Diagnostik noch nicht abgeschlossen oder das Bild sehr uneinheitlich ist."
    ],
    "F04 Organisches amnestisches Syndrom, nicht durch Alkohol oder andere psychotrope Substanzen bedingt": [
        "Ein Patient leidet unter einer massiven Störung des Kurzzeitgedächtnisses nach einem schweren Unfall. Er kann sich keine neuen Fakten merken, obwohl die Aufmerksamkeit und das Bewusstsein ungetrübt sind.",
        "Eine Demenz vom Alzheimer-Typ kann ausgeschlossen werden, da andere kognitive Funktionen wie die Intelligenz weitgehend erhalten sind.",
        "Die Merkfähigkeitsstörung führt dazu, dass der Patient Informationen bereits nach wenigen Minuten wieder vergisst (Anterograde Amnesie).",
        "Häufig liegt eine Schädigung dienzephaler oder hippokampaler Strukturen durch Trauma, Hypoxie oder Enzephalitis vor.",
        "Im Gegensatz zum Delir fehlen globale Bewusstseinsstörungen oder ausgeprägte Wahrnehmungsverzerrungen."
    ],
    "F05 Delir, nicht durch Alkohol oder andere psychotrope Substanzen bedingt": [
        "Eine ältere Patientin wirkt im Krankenhaus plötzlich extrem verwirrt, unruhig und ist zeitlich sowie örtlich nicht mehr orientiert. Dieser Zustand entwickelte sich innerhalb weniger Stunden nach einer Operation.",
        "Die Symptomatik ist nicht auf eine chronische Demenz zurückzuführen, da sie akut auftrat und im Tagesverlauf stark schwankt.",
        "Es zeigen sich Störungen des Schlaf-Wach-Rhythmus sowie visuelle Halluzinationen oder illusionäre Verkennungen.",
        "Die Ursache ist meist ein somatischer Faktor wie ein Harnwegsinfekt, Exsikkose oder eine postoperative Stoffwechselstörung.",
        "Nach Behandlung der zugrunde liegenden körperlichen Ursache bildet sich die psychische Symptomatik meist innerhalb von Tagen zurück."
    ],
    "F06 Andere psychische Störungen aufgrund einer Schädigung oder Funktionsstörung des Gehirns oder einer körperlichen Krankheit": [
        "Ein Patient leidet unter starken Stimmungsschwankungen und Antriebslosigkeit, die zeitgleich mit einer schweren endokrinen Erkrankung auftraten. Die Beschwerden halten nun schon mehrere Wochen an.",
        "Eine primäre depressive Episode wird ausgeschlossen, da die psychische Symptomatik direkt an den Verlauf der körperlichen Krankheit gekoppelt ist.",
        "Dazu gehören Zustände wie die organische Halluzinose, die organische katatone Störung oder die organische Angststörung.",
        "Die psychischen Symptome sind die direkte physiologische Folge einer zerebralen Funktionsstörung oder einer systemischen Krankheit.",
        "Die Diagnose erfordert den Nachweis einer kausalen Verbindung zwischen der körperlichen Diagnose und der psychischen Manifestation."
    ],
    "F07 Persönlichkeits- und Verhaltensstörungen aufgrund einer Krankheit, Schädigung oder Funktionsstörung des Gehirns": [
        "Nach einem schweren Schädel-Hirn-Trauma zeigt ein früher besonnener Mann plötzlich eine ausgeprägte Impulsivität und Distanzlosigkeit. Diese Wesensänderung ist seit dem Unfall stabil geblieben.",
        "Es handelt sich nicht um eine vorbestehende Persönlichkeitsstörung, da das Verhalten vor dem Ereignis völlig unauffällig war.",
        "Charakteristisch sind eine emotionale Labilität, mangelnde Affektkontrolle und eine Veränderung der sexuellen oder sozialen Bedürfnisse.",
        "Die kognitiven Fähigkeiten können erhalten sein, aber die Fähigkeit zur sozialen Urteilsbildung ist massiv beeinträchtigt.",
        "Das klinische Bild wird oft als 'Frontalhirnsyndrom' bezeichnet, wenn die Läsion die präfrontalen Areale betrifft."
    ],
    "F09 Nicht näher bezeichnete organische oder symptomatische psychische Störung": [
        "Eine Patientin zeigt diffuse psychische Symptome, bei denen ein Zusammenhang mit einer körperlichen Erkrankung vermutet wird. Die vorliegenden Daten reichen für eine spezifischere Zuordnung derzeit nicht aus.",
        "Andere organische Syndrome wie Delir oder Amnesie passen nicht exakt auf das komplexe Beschwerdebild.",
        "Die Diagnose wird vergeben, wenn die organische Genese sicher ist, aber die klinischen Merkmale uneinheitlich sind.",
        "Es besteht eine nachgewiesene zerebrale oder systemische Beteiligung, die die Psyche beeinflusst.",
        "Diese Kategorie dient als Auffangbecken für unklare Fälle mit organischem Hintergrund."
    ],
    "F10 Psychische und Verhaltensstörungen durch Alkohol": [
        "Ein Patient stellt sich mit Zittern und innerer Unruhe vor, nachdem er seinen regelmässigen Konsum reduziert hat. Er berichtet, dass er seit Jahren fast täglich trinkt, um sich zu entspannen.",
        "Eine primäre Angststörung wurde ausgeschlossen, da die Symptome spezifisch im Kontext des Alkoholkonsums oder Entzugs auftreten.",
        "Es zeigen sich Kriterien der Abhängigkeit wie Toleranzentwicklung, Kontrollverlust und Vernachlässigung von Interessen.",
        "Folgeschäden wie eine Fettleber oder periphere Neuropathien untermauern die Diagnose des chronischen Missbrauchs.",
        "In schweren Fällen können Entzugsdelirien oder alkoholbedingte Psychosen mit akustischen Halluzinationen auftreten."
    ],
    "F11 Psychische und Verhaltensstörungen durch Opioide": [
        "Ein junger Mann wirkt extrem schläfrig, hat stark verengte Pupillen und zeigt eine verlangsamte Atmung. Er gibt an, Schmerzmittel in weit höheren Dosen als verschrieben einzunehmen.",
        "Die Symptomatik ist nicht durch eine primäre Schlafsucht (Narkolepsie) oder neurologische Erkrankung erklärbar.",
        "Beim Absetzen der Substanz treten massive Entzugssymptome wie Muskelschmerzen, Tränenfluss und ausgeprägte Dysphorie auf.",
        "Es besteht ein starkes Verlangen (Craving) nach Substanzen wie Heroin, Fentanyl oder Morphin.",
        "Die Lebensführung ist meist vollständig auf die Beschaffung und den Konsum der Substanz ausgerichtet."
    ],
    "F12 Psychische und Verhaltensstörungen durch Cannabinoide": [
        "Ein Student berichtet über Konzentrationsprobleme, Motivationsverlust und gelegentliche paranoide Gedanken seit dem täglichen Konsum von Rauschmitteln. Er fühlt sich oft 'vernebelt'.",
        "Psychotische Symptome durch eine Schizophrenie wurden ausgeschlossen, da die Paranoia nur unmittelbar nach dem Konsum auftritt.",
        "Es zeigt sich ein amotivationales Syndrom mit Rückzug aus dem sozialen Leben und Leistungsabfall.",
        "Trotz des Wissens um die negativen Auswirkungen auf das Studium kann der Konsum nicht eingestellt werden.",
        "Die Diagnose umfasst akute Intoxikationen, schädlichen Gebrauch oder ein klares Abhängigkeitssyndrom von Cannabis."
    ],
    "F13 Psychische und Verhaltensstörungen durch Sedativa oder Hypnotika": [
        "Eine ältere Dame wirkt oft benommen und klagt über häufige Stürze in der Wohnung. Sie nimmt seit Jahren Tabletten gegen Schlaflosigkeit und Unruhe ein.",
        "Eine neurologische Ursache für die Gangunsicherheit wurde nicht gefunden, aber die Patientin steigert eigenmächtig die Dosis ihrer Beruhigungsmittel.",
        "Es besteht eine psychische und oft auch physische Abhängigkeit von Benzodiazepinen oder verwandten Stoffen.",
        "Ein plötzliches Absetzen führt zu reboundartiger Schlaflosigkeit, Angst und im Extremfall zu epileptischen Anfällen.",
        "Die Sucht entwickelt sich oft iatrogen durch die langfristige Verschreibung von Schlafmitteln."
    ],
    "F14 Psychische und Verhaltensstörungen durch Kokain": [
        "Ein Patient wird mit Herzrasen, extremem Rededrang und Grössenideen eingeliefert. Er wirkt stark getrieben und hat seit zwei Tagen nicht mehr geschlafen.",
        "Eine manische Episode wurde in Erwägung gezogen, doch die Symptome klingen nach wenigen Stunden rasch ab, gefolgt von einem tiefen Erschöpfungszustand.",
        "Der Patient berichtet von regelmässigem 'Schnupfen' einer weissen Substanz zur Leistungssteigerung im Job.",
        "Es zeigen sich paranoide Wahnideen und taktile Halluzinationen (Gefühl von Insekten unter der Haut).",
        "Nach dem Konsumstopp folgen oft schwere depressive Verstimmungen und ein ausgeprägtes Verlangen nach erneutem Konsum."
    ],
    "F15 Psychische und Verhaltensstörungen durch andere Stimulanzien, einschliesslich Koffein": [
        "Ein Patient zeigt Unruhe, Schlafstörungen und eine übermässige Wachheit über längere Zeiträume. Er gibt an, ständig Aufputschmittel zu nehmen, um sein Pensum zu bewältigen.",
        "ADHS wurde als Ursache ausgeschlossen, da die Hyperaktivität erst im Erwachsenenalter im Zusammenhang mit der Substanzeinnahme begann.",
        "Der Konsum umfasst Stoffe wie Amphetamine, MDMA oder exzessive Mengen an Koffein.",
        "Langzeitfolgen sind oft Gewichtsverlust, Schlafentzugssyndrom und psychotische Episoden mit Verfolgungswahn.",
        "Die Diagnose wird gestellt, wenn der Gebrauch zu klinisch relevanten Beeinträchtigungen oder Entzugserscheinungen führt."
    ],
    "F16 Psychische und Verhaltensstörungen durch Halluzinogene": [
        "Ein junger Mann erlebt intensive Veränderungen der Wahrnehmung, wobei Farben gehört und Töne gesehen werden (Synästhesien). Er ist zeitweise stark verängstigt durch diese Erlebnisse.",
        "Eine Schizophrenie ist unwahrscheinlich, da die Symptome zeitlich eng auf die Einnahme von Substanzen wie LSD oder Psilocybin begrenzt sind.",
        "Es können 'Flashbacks' auftreten, bei denen die Halluzinationen ohne erneuten Konsum plötzlich wiederkehren.",
        "Die psychische Störung kann sich auch als 'Horrortrip' mit massiven Panikattacken und Depersonalisationserlebnissen manifestieren.",
        "Im Vordergrund stehen die tiefgreifenden Veränderungen des Bewusstseinszustandes und der Sinneswahrnehmungen."
    ],
    "F17 Psychische und Verhaltensstörungen durch Tabak": [
        "Ein Patient möchte mit dem Rauchen aufhören, scheitert aber wiederholt an starker Reizbarkeit und Konzentrationsstörungen während der Abstinenzversuche. Er raucht seit der Jugend täglich eine Packung.",
        "Andere psychische Ursachen für die Unruhe liegen nicht vor, die Symptome bessern sich sofort nach dem Rauchen einer Zigarette.",
        "Es besteht ein klarer zwanghafter Drang zum Konsum von Nikotin trotz bekannter gesundheitlicher Risiken wie COPD.",
        "Die Toleranzentwicklung zeigt sich darin, dass die Menge der konsumierten Zigaretten über die Jahre stetig zugenommen hat.",
        "Die Diagnose wird meist im Rahmen von Entwöhnungsprogrammen relevant, wenn das Abhängigkeitssyndrom klinisch manifest ist."
    ],
    "F18 Psychische und Verhaltensstörungen durch flüchtige Lösungsmittel": [
        "Ein Jugendlicher zeigt Koordinationsstörungen, verwaschene Sprache und eine euphorische Stimmung nach dem Aufenthalt in einem Kellerraum. Er riecht stark nach Klebstoff oder Benzin.",
        "Alkoholintoxikation wurde ausgeschlossen, da keine entsprechenden Blutwerte vorliegen und die Wirkung extrem kurz anhält.",
        "Es handelt sich um das Inhalieren von Dämpfen (Sniffen) zur Erzeugung eines Rauschzustandes.",
        "Wiederholter Gebrauch führt zu Hirnschädigungen, Nierenschäden und psychischen Veränderungen wie Apathie.",
        "Die Diagnose ist spezifisch für den Missbrauch von Industriechemikalien, Gasen oder Reinigungsmitteln."
    ],
    "F19 Psychische und Verhaltensstörungen durch multiplen Substanzgebrauch und Konsum anderer psychotroper Substanzen": [
        "Ein Patient nimmt unkontrolliert verschiedene Drogen wie Alkohol, Beruhigungsmittel und Amphetamine gleichzeitig ein. Ein einzelner Hauptwirkstoff lässt sich nicht eindeutig feststellen.",
        "Die Symptomatik ist chaotisch und wechselhaft, da sich die Wirkungen der verschiedenen Substanzen gegenseitig beeinflussen.",
        "Der Patient konsumiert willkürlich, was gerade verfügbar ist, um seine psychische Befindlichkeit zu regulieren.",
        "Es liegt ein Abhängigkeitsmuster vor, bei dem die spezifische Substanz zweitrangig gegenüber dem Wunsch nach Rausch ist.",
        "Die Diagnose wird vergeben, wenn das Konsumverhalten nicht einer einzelnen Substanzgruppe (F10-F18) zugeordnet werden kann."
    ],
    "F20.0 Paranoide Schizophrenie": [
        "Ein 25-jähriger Mann fühlt sich beobachtet und glaubt, dass Nachbarn durch die Wände seine Gedanken lesen könnten. Er wirkt zunehmend isoliert und ängstlich.",
        "Eine organische Ursache durch Drogen oder Hirntumoren wurde durch Tests und Bildgebung ausgeschlossen.",
        "Im Vordergrund stehen akustische Halluzinationen (Stimmenhören) und ein ausgeprägter Verfolgungswahn.",
        "Die Affektivität des Patienten wirkt oft starr oder unangemessen (Parathymie), während das Denken formal zerfahren sein kann.",
        "Die Symptome bestehen bereits seit über einem Monat und führen zu einem massiven Bruch in der Lebensbiografie."
    ],
    "F20.1 Hebephrene Schizophrenie": [
        "Ein Jugendlicher zeigt ein seltsam unpassendes Lachen, flachen Affekt und ein völlig unvorhersehbares, oft albernes Verhalten. Seine schulischen Leistungen sind drastisch abgefallen.",
        "Eine reine Pubertätskrise oder ADHS erklären das Ausmass der Desorganisation und des emotionalen Abbaus nicht.",
        "Im Gegensatz zur paranoiden Form stehen Halluzinationen und Wahn weniger im Vordergrund als die Störung von Antrieb und Stimmung.",
        "Das Verhalten wirkt ziellos, fragmentiert und für Aussenstehende oft provozierend oder sinnlos.",
        "Die Prognose ist meist ungünstiger, da sich die Störung schleichend entwickelt und zu einem raschen sozialen Rückzug führt."
    ],
    "F20.2 Katatone Schizophrenie": [
        "Ein Patient verharrt stundenlang in einer unnatürlichen Körperhaltung und zeigt keinerlei Reaktion auf Ansprache. Zwischendurch kommt es zu Phasen extremer, zielloser Erregung.",
        "Neurologische Erkrankungen wie Epilepsie oder Enzephalitis wurden als Ursache für die Bewegungsstörung ausgeschlossen.",
        "Es zeigen sich Phänomene wie 'Wächserne Biegsamkeit' (Flexibilitas cerea) oder Mutismus.",
        "Der Wechsel zwischen Stupor (völliger Reglosigkeit) und katatoner Erregung ist charakteristisch für dieses Krankheitsbild.",
        "Die psychomotorischen Störungen beherrschen das klinische Bild und stellen einen psychiatrischen Notfall dar."
    ],
    "F20.3 Undifferenzierte Schizophrenie": [
        "Ein Patient weist die allgemeinen Kriterien einer Schizophrenie auf, zeigt aber eine Mischung aus verschiedenen Symptomen ohne eindeutigen Schwerpunkt. Er hört Stimmen, ist aber auch im Verhalten desorganisiert.",
        "Die Kriterien für eine rein paranoide, hebephrene oder katatone Form werden nicht vollständig erfüllt.",
        "Die Symptomatik ist so vielgestaltig, dass keine der klassischen Unterformen die Vorherrschaft übernimmt.",
        "Es treten typische Ich-Störungen und formal-gedankliche Auffälligkeiten auf, die das soziale Leben stark beeinträchtigen.",
        "Diese Diagnose wird oft gestellt, wenn das Krankheitsbild im Zeitverlauf wechselt oder sehr komplex ist."
    ],
    "F20.4 Postschizophrene Depression": [
        "Nach dem Abklingen einer akuten psychotischen Phase mit Wahnvorstellungen versinkt der Patient in eine tiefe Traurigkeit und Antriebslosigkeit. Er fühlt sich innerlich leer.",
        "Die depressiven Symptome sind nicht nur eine Reaktion auf die schwere Diagnose, sondern Teil des schizophrenen Krankheitsverlaufs.",
        "Einige Restsymptome der Schizophrenie wie leise Stimmen oder Misstrauen können noch vorhanden sein.",
        "Es besteht ein erhöhtes Suizidrisiko in dieser Phase des Übergangs von der Psychose zur depressiven Verarbeitung.",
        "Die Diagnose erfordert, dass im letzten Jahr eine Schizophrenie vorlag und nun die depressiven Merkmale dominieren."
    ],
    "F20.5 Schizophrenes Residuum": [
        "Ein Patient, der früher unter schweren psychotischen Schüben litt, zeigt nun seit Jahren einen chronischen Zustand von Antriebslosigkeit und emotionaler Verflachung. Akute Halluzinationen treten nicht mehr auf.",
        "Die Symptomatik ist stabil negativ geprägt, wobei soziale Isolation und mangelnde Selbstfürsorge im Vordergrund stehen.",
        "In der Vorgeschichte muss mindestens eine eindeutige psychotische Episode mit Wahn oder Halluzinationen dokumentiert sein.",
        "Es zeigen sich sogenannte 'Minussymptome' wie Sprachverarmung, Apathie und psychomotorische Verlangsamung.",
        "Die Diagnose wird gestellt, wenn die produktiven (positiven) Symptome seit mindestens 12 Monaten minimiert sind."
    ],
    "F20.6 Schizophrenia simplex": [
        "Ein junger Mensch zieht sich über Jahre hinweg immer mehr aus der Gesellschaft zurück und verliert jegliches Interesse an Arbeit oder Hobbies. Ein akuter psychotischer Schub wurde nie beobachtet.",
        "Eine Depression wurde ausgeschlossen, da eher eine allgemeine Verflachung des Wesens als ein Leidensdruck vorliegt.",
        "Die Störung verläuft schleichend und ist durch eine fortschreitende Verarmung der Persönlichkeit gekennzeichnet.",
        "Es treten keine deutlichen Wahnvorstellungen oder Halluzinationen auf, was die Diagnose oft erschwert.",
        "Der Patient wirkt zunehmend verschroben, wunderlich und unfähig, soziale Anforderungen zu erfüllen."
    ],
    "F21 Schizotype Störung": [
        "Eine Person fällt durch exzentrisches Verhalten, seltsame Kleidung und ein Misstrauen gegenüber anderen auf. Sie glaubt an magische Kräfte und hat oft eigentümliche Wahrnehmungen.",
        "Die Kriterien für eine Schizophrenie werden nie ganz erfüllt, da kein manifester Wahn oder dauerhafte Halluzinationen vorliegen.",
        "Der soziale Rückzug und die affektive Kühle bestehen meist schon seit der frühen Adoleszenz.",
        "Das Denken ist oft vage, umständlich oder metaphorisch, ohne völlig zerfahren zu sein.",
        "Es besteht eine genetische Nähe zum schizophrenen Formenkreis, aber die Symptome bleiben auf einem subpsychotischen Niveau."
    ],
    "F22 Anhaltende wahnhafte Störungen": [
        "Ein älterer Mann ist felsenfest davon überzeugt, dass seine Frau ihn seit 20 Jahren betrügt, obwohl es keinerlei Beweise gibt. Davon abgesehen führt er ein völlig normales Leben.",
        "Eine Schizophrenie ist unwahrscheinlich, da keine Ich-Störungen, Halluzinationen oder Denkstörungen vorliegen.",
        "Der Wahn bezieht sich meist auf ein einzelnes Thema wie Eifersucht, Grössenwahn oder körperliche Missbildung.",
        "Die Wahnideen sind über einen Zeitraum von mindestens drei Monaten stabil und unkorrigierbar.",
        "Der Patient wirkt ausserhalb des Wahnsystems psychisch gesund und sozial integriert."
    ],
    "F23 Akute vorübergehende psychotische Störungen": [
        "Eine junge Frau entwickelt innerhalb weniger Tage eine schwere Psychose mit Wahn und Verwirrtheit nach einem massiven privaten Schock. Das Krankheitsbild wechselt fast stündlich.",
        "Die Symptomatik hält nicht lange genug an, um eine Schizophrenie (Dauer > 1 Monat) zu diagnostizieren.",
        "Oft tritt nach spätestens zwei bis drei Monaten eine vollständige Genesung ohne bleibende Defizite ein.",
        "Häufig stehen polymorphe Symptome im Vordergrund, die sich rasch in ihrer Intensität und Art verändern.",
        "Die Störung ist meist eng mit belastenden Lebensereignissen verknüpft, tritt aber plötzlich und dramatisch auf."
    ],
    "F24 Induzierte wahnhafte Störung": [
        "Zwei Schwestern, die sehr isoliert leben, teilen die feste Überzeugung, dass sie von einer Geheimorganisation verfolgt werden. Eine der beiden ist die treibende Kraft.",
        "Die psychische Störung der einen Person (der 'Passiven') verschwindet meist, wenn sie von der dominanten Person getrennt wird.",
        "Die dominante Person (Induzent) leidet meist selbst an einer schizophrenen oder wahnhaften Störung.",
        "Es besteht eine enge emotionale Bindung zwischen den beteiligten Personen, oft innerhalb einer Familie.",
        "Dieses Phänomen wird klassischerweise auch als 'Folie à deux' bezeichnet."
    ],
    "F25 Schizoaffektive Störungen": [
        "Ein Patient zeigt gleichzeitig schwere depressive Symptome und eindeutig schizophrene Merkmale wie Gedankenentzug. Beides tritt in derselben Krankheitsepisode auf.",
        "Eine rein affektive Störung mit psychotischen Zügen wird ausgeschlossen, da der Wahn nicht zum Stimmungsbild passt (inkongruent).",
        "Es gibt Phasen, in denen sowohl manische oder depressive als auch schizophrene Symptome gleichwertig nebeneinanderstehen.",
        "Die Prognose liegt meist zwischen der einer reinen Schizophrenie und einer rein affektiven Störung.",
        "Die Diagnose erfordert, dass die schizophrenen Symptome für sich genommen die Kriterien erfüllen würden."
    ],
    "F28 Sonstige nichtorganische psychotische Störungen": [
        "Ein Patient zeigt psychotische Merkmale, die in keine der klassischen Kategorien passen. Die Symptome sind zwar psychotisch, aber untypisch in ihrer Ausprägung.",
        "Die organischen Ursachen wurden ausgeschlossen, aber die Kriterien für F20 bis F25 greifen nicht.",
        "Es können seltene Syndrome oder sehr spezifische kulturelle Ausprägungen von Psychosen vorliegen.",
        "Die Störung ist eindeutig nicht auf eine körperliche Gehirnschädigung zurückzuführen.",
        "Diese Kategorie dient der Klassifikation von psychotischen Zuständen, die nicht näher spezifiziert werden können."
    ],
    "F29 Nicht näher bezeichnete nichtorganische Psychose": [
        "Es liegt ein Zustand vor, bei dem Realitätsverlust und Halluzinationen dominieren, aber keine weiteren Informationen zur Einordnung verfügbar sind. Die Diagnose bleibt vorläufig.",
        "Es handelt sich um eine Verlegenheitsdiagnose, wenn die klinischen Kriterien für spezifischere Psychosen unklar sind.",
        "Die Psychose ist funktioneller (nichtorganischer) Natur, aber ihr Verlauf ist noch nicht absehbar.",
        "Meist wird diese Diagnose bei der Erstaufnahme vergeben, bevor eine detaillierte Exploration erfolgt.",
        "Im Vordergrund steht die akute Behandlungsbedürftigkeit eines psychotischen Zustands."
    ],
    "F30 Manische Episode": [
        "Ein Patient ist seit einer Woche extrem aufgekratzt, schläft kaum noch und gibt Unmengen an Geld für unnötige Dinge aus. Er redet ununterbrochen und springt von Thema zu Thema.",
        "Drogeneinfluss durch Kokain oder Amphetamine wurde durch ein Screening ausgeschlossen.",
        "Es bestehen Grössenwahn, Distanzlosigkeit und eine massive Steigerung des Antriebs, die zur sozialen Selbstgefährdung führt.",
        "Die Stimmung ist entweder euphorisch-gehoben oder gereizt-aggressiv.",
        "Die Episode muss mindestens eine Woche anhalten und die normale Lebensführung massiv beeinträchtigen."
    ],
    "F31 Bipolare affektive Störung": [
        "Eine Patientin berichtet, dass sie früher Phasen extremer Traurigkeit hatte, aber vor zwei Jahren auch eine Zeit erlebte, in der sie völlig überdreht und tatendrangig war.",
        "Es handelt sich nicht um eine rezidivierende Depression, da mindestens eine manische oder hypomanische Episode in der Biografie vorliegt.",
        "Der Wechsel zwischen depressiven Tiefs und manischen Hochs prägt den gesamten Lebensverlauf.",
        "Zwischen den Episoden können Phasen vollkommener psychischer Gesundheit (Euthymie) liegen.",
        "Die Diagnose wird oft erst nach Jahren gestellt, da die manischen Phasen vom Patienten häufig nicht als krankhaft erlebt werden."
    ],
    "F32.0 Leichte depressive Episode": [
        "Ein Patient fühlt sich seit drei Wochen etwas niedergeschlagen und weniger energiegeladen als sonst. Er geht seiner Arbeit noch nach, empfindet sie aber als mühsamer.",
        "Es liegen mindestens zwei Hauptsymptome wie gedrückte Stimmung und Interessenverlust vor, aber die soziale Funktion ist erhalten.",
        "Der Patient klagt über leichte Schlafstörungen und eine etwas verminderte Konzentration.",
        "Die Symptome führen zu subjektivem Leiden, aber nicht zu einem völligen Zusammenbruch des Alltags.",
        "Insgesamt müssen etwa 4 bis 5 Symptome der depressiven Checkliste erfüllt sein."
    ],
    "F32.1 Mittelgradige depressive Episode": [
        "Eine Frau kann ihren Haushalt kaum noch bewältigen und hat sich von Freunden fast völlig zurückgezogen. Sie fühlt sich wertlos und weint sehr viel.",
        "Die Beeinträchtigung ist so stark, dass die berufliche Tätigkeit meist nicht mehr ausgeübt werden kann.",
        "Es finden sich deutlich ausgeprägte Symptome wie Appetitverlust, Libidoverlust und frühmorgendliches Erwachen.",
        "Mindestens zwei Hauptsymptome und drei bis vier Zusatzsymptome sind über mindestens zwei Wochen vorhanden.",
        "Die Patientin empfindet eine deutliche Schwere der Symptomatik, hat aber noch keine suizidalen Handlungen geplant."
    ],
    "F32.2 Schwere depressive Episode ohne psychotische Symptome": [
        "Ein Mann liegt fast den ganzen Tag im Bett, vernachlässigt seine Körperpflege und sieht keinen Sinn mehr im Leben. Er spricht nur noch sehr leise und verzögert.",
        "Es besteht eine massive psychomotorische Hemmung und ein fast vollständiger Verlust an Vitalgefühlen.",
        "Suizidgedanken sind sehr präsent und stellen eine akute Gefahr dar.",
        "Halluzinationen oder Wahnvorstellungen liegen jedoch ausdrücklich nicht vor.",
        "Alle drei Hauptsymptome (Stimmung, Antrieb, Interessen) sind in schwerer Ausprägung vorhanden."
    ],
    "F32.3 Schwere depressive Episode mit psychotischen Symptomen": [
        "Eine Patientin ist überzeugt, dass ihr Körper innerlich verfault und sie für den Hunger in der Welt verantwortlich ist. Sie ist völlig erstarrt vor Verzweiflung.",
        "Zusätzlich zur maximalen depressiven Symptomatik treten Wahngedanken auf, die meist stimmungskongruent sind (z.B. Verarmungswahn).",
        "Die Patientin hört möglicherweise anklagende Stimmen, die ihr Versagen kommentieren.",
        "Eine einfache Depression liegt hier nicht mehr vor, da der Realitätsbezug durch den Wahn verloren gegangen ist.",
        "Die Behandlung erfordert zwingend eine Kombination aus Antidepressiva und Antipsychotika."
    ],
    "F33 Rezidivierende depressive Störung": [
        "Ein Patient leidet zum vierten Mal innerhalb von fünf Jahren an einer Phase schwerer Depression. Dazwischen gab es immer wieder Zeiten, in denen er völlig beschwerdefrei war.",
        "In der gesamten Lebensgeschichte gab es niemals Anzeichen für eine manische oder hypomanische Phase.",
        "Die einzelnen Episoden können unterschiedlich schwer ausgeprägt sein (leicht, mittel oder schwer).",
        "Häufig besteht eine familiäre Vorbelastung für affektive Erkrankungen.",
        "Die Diagnose wird gestellt, wenn mindestens zwei depressive Episoden durch ein symptomfreies Intervall getrennt waren."
    ],
    "F34 Anhaltende affektive Störungen (Dysthymia / Zyklothymia)": [
        "Eine Person beschreibt sich selbst seit ihrer Jugend als 'Melancholiker' und fühlt sich fast ständig etwas müde und freudlos. Die Symptome sind aber nie so schwer, dass sie ins Krankenhaus müsste.",
        "Die Beschwerden halten bereits seit über zwei Jahren fast ununterbrochen an.",
        "Bei der Zyklothymia schwankt die Stimmung ständig zwischen leichter Heiterkeit und leichter Niedergeschlagenheit.",
        "Die Kriterien für eine schwere depressive oder manische Episode werden zu keinem Zeitpunkt erfüllt.",
        "Es handelt sich um eine chronische Stimmungsinstabilität, die oft als Teil des Charakters wahrgenommen wird."
    ],
    "F38 Sonstige affektive Störungen": [
        "Ein Patient zeigt affektive Symptome, die weder zeitlich noch in ihrer Kombination in die gängigen Raster von Depression oder Bipolarität passen.",
        "Es treten zum Beispiel Mischzustände auf, bei denen manische und depressive Merkmale extrem schnell abwechseln.",
        "Die Störung ist eindeutig primär affektiv und nicht durch organische Faktoren oder Drogen bedingt.",
        "Es handelt sich um klinisch relevante Zustände, die jedoch untypische Verläufe zeigen.",
        "Die Kategorie dient der Erfassung seltener oder komplexer Stimmungsstörungen."
    ],
    "F39 Nicht näher bezeichnete affektive Störung": [
        "Es besteht eine deutliche Störung der Stimmung, aber die Informationen aus der Anamnese reichen nicht aus, um zwischen Depression oder Bipolarität zu unterscheiden.",
        "Die Diagnose ist vorläufig und wird oft in Notfallsituationen verwendet.",
        "Das Hauptmerkmal ist die krankhafte Veränderung des Affekts ohne weitere Spezifizierung.",
        "Organische Ursachen sollten dennoch vorab ausgeschlossen worden sein.",
        "Die Dokumentation dient der Sicherstellung einer affektorientierten Behandlung."
    ],
    "F40.0 Agoraphobie": [
        "Eine Frau traut sich nicht mehr allein auf grosse Plätze oder in Menschenmengen, aus Angst, dort keine Hilfe zu bekommen oder nicht flüchten zu können.",
        "In weiten, offenen Räumen oder in öffentlichen Verkehrsmitteln bekommt sie Herzrasen und Atemnot.",
        "Oft ist die Angst mit der Sorge vor einer Panikattacke in der Öffentlichkeit verbunden.",
        "Die Patientin vermeidet die angstauslösenden Situationen konsequent oder erträgt sie nur unter massiver Qual.",
        "In schweren Fällen führt dies dazu, dass die Betroffenen ihre Wohnung überhaupt nicht mehr verlassen."
    ],
    "F40.1 Soziale Phobien": [
        "Ein junger Mann meidet Partys und berufliche Besprechungen, weil er fürchtet, sich lächerlich zu machen oder negativ bewertet zu werden.",
        "Beim Sprechen vor anderen bekommt er einen hochroten Kopf, zittert und beginnt stark zu schwitzen.",
        "Es handelt sich nicht um einfache Schüchternheit, da der Leidensdruck und das Vermeidungsverhalten den Alltag massiv einschränken.",
        "Die Angst bezieht sich spezifisch auf Situationen, in denen die Person im Mittelpunkt der Aufmerksamkeit steht.",
        "Oft wird Alkohol als 'Selbstmedikation' eingesetzt, um soziale Ängste in Gruppen zu lindern."
    ],
    "F40.2 Spezifische Phobien": [
        "Eine Patientin gerät in Panik, wenn sie eine Spinne sieht, selbst wenn diese klein und völlig harmlos ist. Sie weiss, dass die Angst unbegründet ist, kann sie aber nicht kontrollieren.",
        "Die Angst tritt ausschliesslich bei ganz bestimmten Objekten oder Situationen auf (z.B. Höhen, Blut, Spritzen).",
        "Der Kontakt mit dem Auslöser führt fast immer zu einer unmittelbaren Angstreaktion.",
        "Die Betroffene unternimmt grosse Anstrengungen, um dem spezifischen Reiz aus dem Weg zu gehen.",
        "Andere psychische Symptome wie Wahn oder generalisierte Angst liegen nicht vor."
    ],
    "F41.0 Panikstörung (episodisch paroxysmale Angst)": [
        "Ein Patient erlebt plötzlich auftretende Anfälle von Todesangst mit heftigem Herzklopfen und Erstickungsgefühlen. Diese Anfälle kommen völlig unvorhersehbar aus heiterem Himmel.",
        "Kardiologische Untersuchungen haben keine organische Ursache für das Herzrasen ergeben.",
        "Die Attacken dauern meist nur einige Minuten, hinterlassen aber eine ausgeprägte 'Angst vor der Angst'.",
        "Zwischen den Anfällen ist der Patient weitgehend angstfrei, sofern er nicht an die nächste Attacke denkt.",
        "Die Diagnose wird gestellt, wenn innerhalb eines Monats mehrere schwere Panikattacken ohne spezifischen Auslöser aufgetreten sind."
    ],
    "F41.1 Generalisierte Angststörung": [
        "Eine Frau macht sich ständig Sorgen um die Gesundheit ihrer Kinder, ihre Finanzen und mögliche Unfälle. Diese Sorgen sind seit über sechs Monaten fast jeden Tag präsent.",
        "Die Angst ist nicht auf ein bestimmtes Objekt oder eine Situation bezogen, sondern 'frei flottierend'.",
        "Körperliche Symptome wie ständige Muskelverspannung, Reizbarkeit und Schlafstörungen begleiten die Sorgen.",
        "Der Patientin fällt es schwer, diese Grübeleien zu kontrollieren, obwohl sie die Übertriebenheit oft erkennt.",
        "Die Lebensqualität ist durch die ständige Anspannung und die Erwartungsangst massiv gemindert."
    ],
    "F41.2 Angst und depressive Störung, gemischt": [
        "Der Patient beschreibt einen Zustand der „Zerrissenheit“: Er fühlt sich gleichzeitig getrieben und nervös, aber auch antriebslos und emotional leer. Es ist ein klinisches Bild, das sich nicht klar einem einzelnen Pol zuordnen lässt.",
        "Das Besondere hier ist: Würde man die Symptome aufteilen, würde keine der beiden vorliegenden Störungsbilder die nötige Schwere oder Anzahl an Kriterien erfüllen, um als eigenständige Diagnose durchzugehen.",
        "Es zeigt sich ein „Mischbild“ aus vegetativen Beschwerden (wie Herzklopfen oder Zittern) und klassischen Anhedonien (Freudlosigkeit und Interessenverlust).",
        "Diese Codierung wird besonders häufig in der Primärversorgung (Hausarztpraxis) genutzt, da Patienten dort oft mit diffusen, unspezifischen psychischen Beschwerden vorstellig werden, die genau zwischen zwei Kategorien fallen.",
        "Sind die depressiven Symptome schwerwiegend genug für eine depressive Episode, hat diese Diagnose Vorrang. Bestehen beide Störungsbilder voll ausgeprägt nebeneinander, wird ebenfalls anders codiert. Diese Diagnose ist das „Auffangbecken“ für das gleichzeitige, aber unterschwellige Vorhandensein beider Welten."
    ],
    "F42 Zwangsstörung": [
        "Ein Mann muss jeden Abend kontrollieren, ob der Herd ausgeschaltet ist, und zwar genau 20 Mal hintereinander. Wenn er es nicht tut, überkommt ihn eine unerträgliche Angst.",
        "Er erkennt die Sinnlosigkeit seines Verhaltens, kann aber dennoch nicht damit aufhören.",
        "Die Zwangsgedanken oder Zwangshandlungen nehmen täglich mehr als eine Stunde Zeit in Anspruch.",
        "Die Handlungen dienen dazu, ein vermeintliches Unheil abzuwenden, das rational in keinem Zusammenhang steht.",
        "Die Symptomatik führt zu erheblichen Behinderungen im sozialen und beruflichen Leben."
    ],
    "F43.0 Akute Belastungsreaktion": [
        "Unmittelbar nach einem schweren Autounfall wirkt ein Beteiligter wie betäubt, starrt ins Leere und scheint das Geschehene nicht zu begreifen.",
        "Kurz darauf wechselt der Zustand in eine Phase von Unruhe, Zittern und Herzrasen.",
        "Die Symptome treten innerhalb von Minuten nach dem traumatischen Ereignis auf.",
        "Der Zustand klingt normalerweise innerhalb von Stunden oder spätestens nach zwei bis drei Tagen wieder ab.",
        "Es handelt sich um eine normale Reaktion auf ein aussergewöhnlich belastendes Ereignis."
    ],
    "F43.1 Posttraumatische Belastungsstörung": [
        "Ein Soldat leidet Monate nach seinem Einsatz unter quälenden Erinnerungsbildern, die sich ihm ungewollt aufdrängen. Er ist extrem schreckhaft und meidet alles, was ihn an den Krieg erinnert.",
        "Es treten sogenannte Flashbacks und Albträume auf, in denen das Trauma wiedererlebt wird.",
        "Der Patient fühlt sich innerlich wie taub und zieht sich emotional von seinen Mitmenschen zurück.",
        "Ein Zustand von chronischer Übererregung mit Schlafstörungen und Konzentrationsproblemen liegt vor.",
        "Die Symptome bestehen seit mehr als einem Monat und folgen auf ein Ereignis von katastrophalem Ausmass."
    ],
    "F43.2 Anpassungsstörungen": [
        "Nach einer schmerzhaften Trennung von seinem Partner ist ein Mann seit Wochen bedrückt, kann sich nicht auf die Arbeit konzentrieren und fühlt sich überfordert.",
        "Der psychische Zustand ist eine Reaktion auf eine einschneidende Lebensveränderung, aber kein schweres Trauma.",
        "Die Symptome erfüllen nicht die Kriterien für eine schwere depressive Episode.",
        "Die Beeinträchtigung beginnt meist innerhalb eines Monats nach dem belastenden Ereignis.",
        "Die Störung dauert in der Regel nicht länger als sechs Monate nach Ende der Belastung an."
    ],
    "F44 Dissoziative Störungen (Konversionsstörungen)": [
        "Eine junge Frau kann plötzlich ihre Beine nicht mehr bewegen, obwohl neurologisch alle Nervenbahnen und Muskeln völlig intakt sind. Das Symptom trat nach einem heftigen Familienstreit auf.",
        "Es besteht ein zeitlicher Zusammenhang zwischen psychischer Belastung und dem körperlichen Funktionsausfall.",
        "Dazu gehören auch Phänomene wie dissoziative Amnesie (Gedächtnisverlust) oder dissoziativer Stupor.",
        "Der Patient scheint über die Schwere des Symptoms oft erstaunlich wenig beunruhigt zu sein (Belle Indifférence).",
        "Die Symptome sind nicht bewusst vorgetäuscht, sondern Ausdruck eines unbewussten psychischen Konflikts."
    ],
    "F45 Somatoforme Störungen": [
        "Ein Patient klagt seit Jahren über wechselnde Schmerzen im Bauch, Rücken und Kopf. Trotz zahlreicher Arztbesuche konnte nie eine körperliche Ursache gefunden werden.",
        "Der Patient ist fest davon überzeugt, eine schwere Krankheit zu haben, und verlangt ständig neue Untersuchungen.",
        "Häufig stehen Magen-Darm-Beschwerden oder Hautmissempfindungen im Vordergrund.",
        "Psychische Faktoren werden vom Patienten als Ursache meist kategorisch abgelehnt.",
        "Die ständige Beschäftigung mit den Symptomen führt zu einer massiven Beeinträchtigung des sozialen Lebens."
    ],
    "F48 Andere neurotische Störungen (z.B. Neurasthenie)": [
        "Ein Angestellter fühlt sich nach geringster geistiger Anstrengung völlig erschöpft und klagt über Konzentrationsschwäche sowie Reizbarkeit. Körperliche Erholung bringt kaum Besserung.",
        "Es bestehen häufig begleitende Symptome wie Spannungskopfschmerz und Schwindelgefühle.",
        "Die Kriterien für eine Depression oder Angststörung werden nicht voll erfüllt.",
        "Im Vordergrund steht das Gefühl einer chronischen Erschöpfbarkeit und Schwäche.",
        "Die Diagnose wird oft gestellt, wenn ein Burnout-ähnliches Bild im Rahmen neurotischer Mechanismen auftritt."
    ],
    "F50.0 Anorexia nervosa": [
        "Ein 16-jähriges Mädchen hat innerhalb kurzer Zeit massiv an Gewicht verloren und verweigert die Teilnahme an gemeinsamen Mahlzeiten. Sie empfindet sich trotz Untergewichts als zu dick.",
        "Es liegt ein Body-Mass-Index (BMI) von unter 17,5 vor, der aktiv durch Fasten oder exzessiven Sport herbeigeführt wurde.",
        "Die Angst vor einer Gewichtszunahme ist so gross, dass sie das gesamte Denken und Handeln beherrscht.",
        "Bei Frauen tritt häufig eine Amenorrhö (Ausbleiben der Regelblutung) als endokrine Folge auf.",
        "Es besteht eine ausgeprägte Körperschemastörung, bei der die Realität des eigenen Körpers verleugnet wird."
    ],
    "F50.2 Bulimia nervosa": [
        "Eine junge Frau leidet unter wiederkehrenden Essattacken, bei denen sie grosse Mengen hochkalorischer Nahrung zu sich nimmt. Danach fühlt sie sich schuldig und erzwingt Erbrechen.",
        "Im Gegensatz zur Anorexie sind diese Patientinnen meist normalgewichtig.",
        "Um eine Gewichtszunahme zu verhindern, werden oft auch Abführmittel oder Fastenphasen eingesetzt.",
        "Die gedankliche Beschäftigung mit Essen und dem Körpergewicht ist zwanghaft gesteigert.",
        "Die Essanfälle treten über mindestens drei Monate hinweg etwa zweimal pro Woche auf."
    ],
    "F50.4 Essattacken bei anderen psychischen Störungen": [
        "Ein Patient reagiert auf emotionalen Stress oder depressive Phasen mit unkontrollierten Fressanfällen. Er nutzt das Essen als einzige Strategie zur Regulation seiner Gefühle.",
        "Kompensatorische Massnahmen wie Erbrechen oder exzessiver Sport fehlen hier meist.",
        "Die Gewichtszunahme wird als belastend erlebt, führt aber nicht zu den typischen Mustern einer Bulimie.",
        "Das Essverhalten steht in direktem Zusammenhang mit einer anderen diagnostizierten psychischen Störung.",
        "Es handelt sich oft um ein 'Emotional Eating' in klinisch relevantem Ausmass."
    ],
    "F51 Nichtorganische Schlafstörungen": [
        "Ein Mann klagt seit Monaten über Schwierigkeiten beim Einschlafen und wacht nachts stundenlang auf. Er fühlt sich tagsüber extrem müde und unkonzentriert.",
        "Es wurde keine körperliche Ursache wie Schlafapnoe oder Restless-Legs-Syndrom gefunden.",
        "Die Schlafstörung ist entweder das Hauptsymptom oder ein wesentlicher Teil einer psychischen Belastung.",
        "Dazu zählen auch Albträume, Pavor nocturnus (Nachtangst) oder Schlafwandeln.",
        "Die Dauer und Qualität des Schlafes werden vom Betroffenen als absolut ungenügend und quälend empfunden."
    ],
    "F52 Sexuelle Funktionsstörungen, nicht verursacht durch eine organische Störung oder Krankheit": [
        "Ein Paar berichtet über einen vollständigen Verlust des sexuellen Verlangens seit über einem Jahr. Körperliche Untersuchungen blieben ohne Befund.",
        "Dazu gehören Probleme wie Erektionsstörungen, Vaginismus oder vorzeitiger Samenerguss auf psychischer Basis.",
        "Häufig spielen Versagensängste, Partnerschaftskonflikte oder traumatische Vorerfahrungen eine Rolle.",
        "Die Störung tritt oft situationsabhängig auf, was gegen eine rein organische Ursache spricht.",
        "Der Leidensdruck der Betroffenen oder der Partnerschaft ist das entscheidende Kriterium für die Diagnose."
    ],
    "F53 Psychische oder Verhaltensstörungen im Wochenbett, anderenorts nicht klassifiziert": [
        "Eine junge Mutter fühlt sich zwei Wochen nach der Geburt extrem überfordert, weint viel und kann keine Bindung zu ihrem Neugeborenen aufbauen. Sie hat Angst, dem Kind etwas anzutun.",
        "Es handelt sich nicht um den normalen 'Babyblues', da die Symptome länger anhalten und schwerwiegender sind.",
        "Die Störung beginnt innerhalb von sechs Wochen nach der Entbindung.",
        "Das Bild kann von einer leichten Depression bis hin zur schweren postpartalen Psychose reichen.",
        "Die Diagnose wird verwendet, wenn die Störung spezifisch durch die hormonelle und psychische Umstellung nach der Geburt ausgelöst wurde."
    ],
    "F54 Psychologische Faktoren oder Verhaltensfaktoren bei anderenorts klassifizierten Krankheiten": [
        "Ein Patient mit schwerem Asthma leidet unter psychischem Stress, der seine Atembeschwerden massiv verschlimmert. Er weigert sich zudem, seine Medikamente regelmässig zu nehmen.",
        "Die psychischen Faktoren haben einen messbaren Einfluss auf den Verlauf der körperlichen Krankheit.",
        "Beispiele sind psychogene Verschlechterungen bei Neurodermitis, Magengeschwüren oder chronischen Schmerzen.",
        "Die körperliche Krankheit ist primär somatisch diagnostiziert, wird aber durch die Psyche negativ beeinflusst.",
        "Die Diagnose dient dazu, die Notwendigkeit einer begleitenden Psychotherapie bei körperlichen Leiden zu begründen."
    ],
    "F55 Missbrauch von nichtabhängigkeitserzeugenden Substanzen": [
        "Eine Patientin nimmt täglich Abführmittel in grossen Mengen, obwohl keine medizinische Notwendigkeit besteht. Sie glaubt, dadurch ihr Gewicht besser kontrollieren zu können.",
        "Es handelt sich um Substanzen wie Vitamine, Schmerzmittel oder pflanzliche Präparate, die kein klassisches Suchtpotential haben.",
        "Trotz gesundheitlicher Warnungen durch den Arzt wird der Konsum fortgesetzt.",
        "Der Patient entwickelt oft eine psychische Abhängigkeit von der Wirkung oder der Einnahmehandlung.",
        "Es treten häufig körperliche Folgeschäden durch den jahrelangen unkontrollierten Gebrauch auf."
    ],
    "F59 Nicht näher bezeichnete Verhaltensauffälligkeiten bei körperlichen Störungen und Faktoren": [
        "Es liegen psychische Auffälligkeiten vor, die im Zusammenhang mit körperlichen Funktionen stehen, aber nicht in die Kategorien F50-F55 passen.",
        "Die Symptome betreffen zum Beispiel das Ess- oder Schlafverhalten, sind aber untypisch ausgeprägt.",
        "Die Verbindung zwischen körperlichem Erleben und psychischer Reaktion ist offensichtlich.",
        "Es fehlen ausreichende Daten für eine spezifischere Zuordnung.",
        "Die Diagnose wird oft als Platzhalter für komplexe psychosomatische Bilder verwendet."
    ],
    "F60.0 Paranoide Persönlichkeitsstörung": [
        "Ein Mann ist seit seiner Jugend davon überzeugt, dass seine Kollegen ihn hintergehen und seine Ideen stehlen wollen. Er reagiert auf kleinste Kritik extrem aggressiv und nachtragend.",
        "Es liegt kein akuter Wahn vor, sondern ein tief verwurzeltes, zeitstabiles Muster von Misstrauen gegenüber anderen.",
        "Neutrale Handlungen anderer werden häufig als feindselig oder herabsetzend missgedeutet.",
        "Die Person hat grosse Schwierigkeiten, enge Vertrauensbeziehungen aufzubauen oder Geheimnisse zu teilen.",
        "Das Verhalten führt zu ständigen Konflikten in Beruf und Privatleben durch unbegründetes Misstrauen."
    ],
    "F60.1 Schizoide Persönlichkeitsstörung": [
        "Ein Einzelgänger zeigt keinerlei Interesse an sozialen Beziehungen oder emotionaler Nähe zu anderen Menschen. Er geht lieber Hobbies nach, die er völlig allein ausüben kann.",
        "Die Person wirkt auf andere kühl, distanziert und emotional flach.",
        "Lob oder Kritik von anderen scheinen keinerlei Wirkung auf den Betroffenen zu haben.",
        "Es besteht kein Mangel an sozialen Fähigkeiten aus Angst, sondern ein echtes Desinteresse an Gesellschaft.",
        "Die Betroffenen leben oft in ihrer eigenen Fantasiewelt, ohne den Kontakt zur Realität zu verlieren."
    ],
    "F60.2 Dissoziale Persönlichkeitsstörung": [
        "Ein junger Mann fällt durch wiederholte Gesetzesverstösse, Aggressivität und einen völligen Mangel an Reue oder Mitgefühl gegenüber seinen Opfern auf.",
        "Schon in der Kindheit gab es Berichte über Tierquälerei und das Schwänzen der Schule.",
        "Es besteht eine geringe Frustrationstoleranz und eine hohe Neigung, andere für die eigenen Zwecke zu manipulieren.",
        "Soziale Normen und Verpflichtungen werden dauerhaft ignoriert, ohne dass aus den Konsequenzen gelernt wird.",
        "Die Diagnose erfordert, dass das Verhalten nicht nur in einer isolierten Episode, sondern als stabiles Persönlichkeitsmerkmal auftritt."
    ],
    "F60.3 Emotional instabile Persönlichkeitsstörung (Impulsiver Typ / Borderline-Typ)": [
        "Eine junge Frau erlebt extreme Stimmungsschwankungen und neigt zu Selbstverletzungen, wenn sie sich verlassen fühlt. Ihre Beziehungen sind intensiv, aber sehr instabil.",
        "Es besteht ein chronisches Gefühl von innerer Leere und eine starke Unsicherheit bezüglich der eigenen Identität.",
        "Impulsive Handlungen wie riskantes Autofahren oder Essanfälle dienen oft dem Abbau innerer Anspannung.",
        "Die Angst vor dem Alleinsein führt zu verzweifelten Bemühungen, Trennungen zu verhindern.",
        "In Krisensituationen können vorübergehende paranoide Vorstellungen oder schwere dissoziative Symptome auftreten."
    ],
    "F60.4 Histrionische Persönlichkeitsstörung": [
        "Ein Patient steht gern im Mittelpunkt und setzt dafür ein sehr theatralisches, übertrieben emotionales Verhalten ein. Wenn er keine Beachtung findet, fühlt er sich unwohl.",
        "Die äussere Erscheinung wird oft provokativ oder verführerisch eingesetzt, um Aufmerksamkeit zu erregen.",
        "Die Gefühle wirken auf andere oberflächlich und wechseln sehr schnell.",
        "Die betroffene Person ist leicht durch andere oder durch aktuelle Trends beeinflussbar (Suggestibilität).",
        "Beziehungen werden oft als viel intimer dargestellt, als sie in der Realität tatsächlich sind."
    ],
    "F60.5 Anankastische (zwanghafte) Persönlichkeitsstörung": [
        "Eine Frau ist extrem perfektionistisch und verliert sich so sehr in Details und Listen, dass sie ihre eigentlichen Aufgaben oft nicht rechtzeitig fertigstellt.",
        "Sie wirkt starr, eigensinnig und stellt übertrieben hohe Ansprüche an sich selbst und ihre Mitmenschen.",
        "Freizeitaktivitäten und Freundschaften werden zugunsten von Arbeit und Produktivität vernachlässigt.",
        "Es besteht eine übermässige Gewissenhaftigkeit und Sorge um Regeln und Ordnung.",
        "Im Gegensatz zur Zwangsstörung (F42) fehlen hier meist die spezifischen, sich aufdrängenden Zwangshandlungen."
    ],
    "F60.6 Ängstlich-vermeidende Persönlichkeitsstörung": [
        "Eine Person meidet berufliche Beförderungen, die viel Kontakt mit Menschen erfordern, aus Angst vor Ablehnung oder Kritik. Sie hält sich selbst für minderwertig.",
        "Es besteht eine ständige Sorge, in sozialen Situationen abgelehnt oder lächerlich gemacht zu werden.",
        "Enge Bindungen werden nur eingegangen, wenn die absolute Sicherheit besteht, gemocht zu werden.",
        "Der Betroffene leidet unter einem starken Gefühl der sozialen Unbeholfenheit und Unattraktivität.",
        "Die Lebensführung ist durch eine massive Vermeidung von Risiken und neuen Aktivitäten geprägt."
    ],
    "F60.7 Abhängige (asthenische) Persönlichkeitsstörung": [
        "Ein Mann kann keine alltäglichen Entscheidungen treffen, ohne vorher massenhaft Rat und Bestätigung von seiner Mutter einzuholen. Er ordnet seine eigenen Bedürfnisse völlig unter.",
        "Es besteht eine grosse Angst davor, verlassen zu werden und auf sich allein gestellt zu sein.",
        "Die Person übernimmt kaum Verantwortung für ihr eigenes Leben und lässt andere wichtige Entscheidungen für sich treffen.",
        "Nach dem Ende einer engen Beziehung wird sofort nach einer neuen Stütze gesucht.",
        "Widerspruch gegenüber anderen wird vermieden, um die Unterstützung nicht zu gefährden."
    ],
    "F61 Kombinierte und andere Persönlichkeitsstörungen": [
        "Ein Patient zeigt deutliche Merkmale verschiedener Persönlichkeitsstörungen, wie zum Beispiel Anteile von Borderline und paranoider Struktur. Keines der Bilder dominiert jedoch allein.",
        "Die Symptomatik führt zu klinisch bedeutsamem Leiden, lässt sich aber nicht eindeutig einer Kategorie von F60 zuordnen.",
        "Es handelt sich um Mischbilder, die oft besonders schwierig in der Therapie zu handhaben sind.",
        "Das Verhalten ist über lange Zeit stabil und beeinträchtigt mehrere Funktionsbereiche des Lebens.",
        "Diese Diagnose wird häufig gestellt, wenn die Persönlichkeitspathologie sehr komplex ist."
    ],
    "F62 Andauernde Persönlichkeitsänderungen, nicht Folge einer Gehirnschädigung oder -krankheit": [
        "Ein früher lebensfroher Mann hat sich nach zweijähriger Gefangenschaft und Folter völlig verändert. Er ist nun dauerhaft misstrauisch, feindselig und sozial isoliert.",
        "Die Änderung der Persönlichkeit trat erst im Erwachsenenalter nach einer extremen Belastung auf.",
        "Es handelt sich nicht um eine PTBS, da die Wesensänderung dauerhaft und tiefgreifend ist.",
        "Dazu zählt auch die Persönlichkeitsänderung nach einer schweren psychiatrischen Erkrankung.",
        "Die neue Persönlichkeitsstruktur ist starr und weicht deutlich vom früheren Selbstbild ab."
    ],
    "F63 Abnorme Gewohnheiten und Störungen der Impulskontrolle": [
        "Ein Patient berichtet von einem unkontrollierbaren Drang, in Spielhallen sein gesamtes Gehalt zu verspielen, obwohl er weiss, dass er seine Miete nicht mehr zahlen kann.",
        "Zu dieser Gruppe gehören auch Kleptomanie (Stehlen), Pyromanie (Feuerlegen) und Trichotillomanie (Haareausreissen).",
        "Vor der Handlung steigt die innere Spannung massiv an, die nach der Tat einer kurzen Erleichterung weicht.",
        "Die Handlungen sind nicht durch materielle Gier oder Rache motiviert, sondern durch den Impuls selbst.",
        "Trotz wiederholter negativer Konsequenzen gelingt es dem Betroffenen nicht, das Verhalten zu unterlassen."
    ],
    "F64 Störungen der Geschlechtsidentität": [
        "Eine Person fühlt sich seit ihrer Kindheit im falschen Körper geboren und hat den tiefen Wunsch, als Angehöriger des anderen Geschlechts zu leben.",
        "Es besteht ein dauerhaftes Unbehagen über das eigene biologische Geschlecht und die damit verbundenen sozialen Rollen.",
        "Oft wird eine hormonelle oder operative Angleichung an das gewünschte Geschlecht angestrebt.",
        "Es handelt sich nicht um eine vorübergehende Phase, sondern um eine stabile Identität.",
        "Die Diagnose umfasst auch die Geschlechtsidentitätsstörung des Kindesalters."
    ],
    "F65 Störungen der Sexualpräferenz": [
        "Ein Mann berichtet, dass er sexuelle Erregung nur empfinden kann, wenn er bestimmte leblose Gegenstände wie Schuhe benutzt oder in seine Fantasien einbezieht.",
        "Dazu zählen Paraphilien wie Fetischismus, Exhibitionismus, Voyeurismus oder Pädophilie.",
        "Die Präferenz muss über mindestens sechs Monate bestehen und die sexuelle Funktionsfähigkeit oder soziale Integration stören.",
        "Oft leiden die Betroffenen unter ihrem Drang oder geraten mit dem Gesetz in Konflikt.",
        "Andere psychische Störungen wie Schizophrenie müssen als primäre Ursache für das Verhalten ausgeschlossen sein."
    ],
    "F66 Psychische und Verhaltensstörungen im Zusammenhang mit der sexuellen Entwicklung und Orientierung": [
        "Ein Jugendlicher leidet unter massiven Ängsten und Depressionen, weil er sich bezüglich seiner sexuellen Identität unsicher ist und Diskriminierung fürchtet.",
        "Die sexuelle Orientierung an sich ist hier nicht die Störung, sondern der damit verbundene Leidensdruck.",
        "Oft besteht der Wunsch, die eigene sexuelle Ausrichtung zu ändern, um besser in das soziale Umfeld zu passen.",
        "Die Diagnose hilft dabei, Unterstützungsangebote bei Identitätskrisen zu rechtfertigen.",
        "Es geht primär um die psychische Verarbeitung der sexuellen Entwicklung."
    ],
    "F68 Andere Persönlichkeits- und Verhaltensstörungen": [
        "Eine Patientin täuscht absichtlich körperliche Symptome vor und unterzieht sich unnötigen Operationen, um die Rolle einer Kranken einzunehmen (Münchhausen-Syndrom).",
        "Es liegt kein offensichtlicher äusserer Vorteil wie finanzielle Entschädigung vor (Abgrenzung zur Simulation).",
        "Die Motivation ist rein psychisch und dient der Erlangung von Zuwendung und Aufmerksamkeit durch das medizinische System.",
        "Dazu gehören auch chronische Schmerzstörungen mit starker psychischer Komponente, die sonst nirgends passen.",
        "Das Verhalten ist oft zwanghaft und führt zu massiven Selbstschädigungen."
    ],
    "F70 Leichte Intelligenzminderung": [
        "Ein Schüler hat grosse Schwierigkeiten, dem Unterricht in der Regelschule zu folgen, und benötigt viel Zeit für einfache logische Zusammenhänge. Er ist im Alltag aber weitgehend selbstständig.",
        "Der Intelligenzquotient (IQ) liegt in einem Bereich zwischen 50 und 69 Punkten.",
        "Spracherwerb und soziale Integration verlaufen verzögert, erreichen aber ein Niveau für einfache Tätigkeiten.",
        "Die betroffene Person kann oft lesen und schreiben, benötigt aber Unterstützung bei komplexen administrativen Aufgaben.",
        "Es handelt sich um das klassische Bild der 'Lernbehinderung' im klinischen Sinne."
    ],
    "F71 Mittelgradige Intelligenzminderung": [
        "Ein Erwachsener kann einfache Gespräche führen, benötigt aber im Alltag bei der Körperpflege und beim Einkaufen ständige Anleitung. Er arbeitet in einer geschützten Werkstatt.",
        "Der IQ bewegt sich in einem Bereich von 35 bis 49 Punkten.",
        "Die motorische Entwicklung und die Sprache sind deutlich eingeschränkt und verzögert.",
        "Eine unabhängige Lebensführung ist meist nicht möglich, aber einfache Haushaltstätigkeiten können erlernt werden.",
        "Häufig liegen zusätzliche neurologische oder körperliche Beeinträchtigungen vor."
    ],
    "F72 Schwere Intelligenzminderung": [
        "Eine Person verfügt nur über einen sehr begrenzten Wortschatz und kann einfache Wünsche oft nur durch Gesten äussern. Sie benötigt umfassende Hilfe in allen Lebensbereichen.",
        "Der IQ liegt zwischen 20 und 34 Punkten.",
        "Die psychomotorische Entwicklung ist massiv beeinträchtigt und oft liegen erhebliche neurologische Schäden vor.",
        "Eine schulische Förderung ist nur in Form von Basispädagogik möglich.",
        "Die Betroffenen benötigen lebenslange, intensive Betreuung und Aufsicht."
    ],
    "F73 Schwerste Intelligenzminderung": [
        "Ein Patient zeigt kaum Reaktionen auf seine Umwelt und ist in seiner Bewegungsfähigkeit extrem eingeschränkt. Eine verbale Kommunikation ist nicht vorhanden.",
        "Der Intelligenzquotient liegt unter 20 Punkten.",
        "Es besteht eine vollständige Abhängigkeit von Pflegekräften für alle biologischen Bedürfnisse.",
        "Häufig treten schwere Krampfanfälle und Sinnesbehinderungen als Begleitsymptome auf.",
        "Die Diagnose wird meist bereits im frühen Säuglingsalter aufgrund der massiven Entwicklungsrückstände gestellt."
    ],
    "F74 Dissoziative Störungen der Intelligenz": [
        "Ein Kind, das zuvor eine normale Intelligenz zeigte, verliert nach einem traumatischen Ereignis plötzlich scheinbar seine kognitiven Fähigkeiten und wirkt wie intelligenzgemindert.",
        "Es handelt sich nicht um einen hirnorganischen Abbau, sondern um einen psychischen Schutzmechanismus.",
        "Die gezeigten Leistungen schwanken stark je nach emotionalem Zustand.",
        "Bei Entlastung der psychischen Situation können die ursprünglichen Fähigkeiten wieder zum Vorschein kommen.",
        "Diese Diagnose ist selten und erfordert einen klaren Ausschluss organischer Hirnschäden."
    ],
    "F78 Andere Intelligenzminderung": [
        "Es besteht eine deutliche Intelligenzminderung, aber aufgrund von körperlichen Behinderungen (z.B. Blindheit und Taubheit) kann kein Standard-IQ-Test durchgeführt werden.",
        "Die klinische Einschätzung bestätigt jedoch eine massive geistige Einschränkung.",
        "Die Diagnose wird vergeben, wenn die üblichen Testverfahren nicht anwendbar sind.",
        "Die Schwere der Minderung lässt sich nicht exakt in die Kategorien F70-F73 einordnen.",
        "Dennoch ist eine spezifische Förderung und Betreuung zwingend erforderlich."
    ],
    "F79 Nicht näher bezeichnete Intelligenzminderung": [
        "Es liegt eine offensichtliche geistige Behinderung vor, aber es fehlen bisher genaue Daten zur Einstufung der Schweregrade. Die Untersuchung ist noch nicht abgeschlossen.",
        "Diese Kategorie dient als vorläufige Diagnose bei Erstvorstellungen.",
        "Der Grad der Beeinträchtigung ist klinisch relevant, aber quantitativ noch nicht erfasst.",
        "Oft wird diese Diagnose bei fehlender Kooperationsbereitschaft oder in Krisensituationen verwendet.",
        "Die Dokumentation sichert den Zugang zu heilpädagogischen Massnahmen."
    ],
    "F80 Umschriebene Entwicklungsstörungen des Sprechens und der Sprache": [
        "Ein vierjähriger Junge spricht deutlich weniger Worte als seine Gleichaltrigen und bildet keine Sätze. Sein Hörvermögen und seine allgemeine Intelligenz sind jedoch völlig normal.",
        "Es handelt sich nicht um eine Folge von Vernachlässigung oder einer neurologischen Erkrankung.",
        "Die Störung betrifft entweder das Sprachverständnis oder die Artikulation von Lauten.",
        "Die Defizite sind nicht durch eine Intelligenzminderung (F70-F79) erklärbar.",
        "Frühzeitige Logopädie ist die wichtigste therapeutische Massnahme bei dieser Diagnose."
    ],
    "F81 Umschriebene Entwicklungsstörungen schulischer Fertigkeiten (Lese-Rechtschreibstörung / Rechenstörung)": [
        "Ein intelligentes Mädchen hat extreme Schwierigkeiten, einfache Wörter flüssig zu lesen oder fehlerfrei zu schreiben. In anderen Fächern zeigt sie jedoch sehr gute Leistungen.",
        "Es liegt keine Seh- oder Hörstörung vor, die die Probleme beim Lernen erklären könnte.",
        "Die Leistungen im Lesen, Schreiben oder Rechnen liegen deutlich unter dem Niveau, das aufgrund des IQs zu erwarten wäre.",
        "Die Schwierigkeiten bestehen von Beginn der Schulzeit an und sind nicht Folge mangelnder Beschulung.",
        "Oft führen diese Teilleistungsstörungen zu Sekundärsymptomen wie Schulangst oder gemindertem Selbstwertgefühl."
    ],
    "F82 Umschriebene Entwicklungsstörung der motorischen Funktionen": [
        "Ein Kind wirkt auffallend ungeschickt, stolpert oft und hat grosse Probleme beim Erlernen von feinmotorischen Tätigkeiten wie dem Zubinden von Schuhen.",
        "Eine neurologische Krankheit wie Zerebralparese wurde ausgeschlossen.",
        "Die motorischen Leistungen liegen signifikant unter dem altersentsprechenden Durchschnitt.",
        "Häufig besteht eine Kombination aus grobmotorischer Tollpatschigkeit und feinmotorischen Defiziten.",
        "Das klinische Bild wird oft als 'Umschriebene Entwicklungsstörung der Koordination' bezeichnet."
    ],
    "F83 Kombinierte umschriebene Entwicklungsstörungen": [
        "Bei einem Kind liegen gleichzeitig Verzögerungen in der Sprachentwicklung, in der Motorik und beim Erlernen schulischer Fertigkeiten vor. Keine dieser Störungen dominiert allein.",
        "Die Kriterien für mehrere Einzeldiagnosen aus F80, F81 und F82 sind teilweise erfüllt.",
        "Das Gesamtbild zeigt eine allgemeine Entwicklungsverzögerung in mehreren spezifischen Bereichen.",
        "Die Intelligenz liegt dennoch in einem Bereich, der keine generelle Intelligenzminderung rechtfertigt.",
        "Die Therapie muss multiprofessionell erfolgen, um alle betroffenen Bereiche abzudecken."
    ],
    "F84.0 Frühkindlicher Autismus": [
        "Ein dreijähriges Kind nimmt kaum Blickkontakt auf, spricht nicht und spielt stundenlang nur damit, Räder an einem Spielzeugauto zu drehen. Es reagiert panisch auf kleinste Veränderungen.",
        "Die Störung manifestiert sich bereits vor dem dritten Lebensjahr.",
        "Es besteht eine qualitative Beeinträchtigung der sozialen Interaktion und Kommunikation.",
        "Stereotype Verhaltensmuster und begrenzte Interessen bestimmen den Alltag des Kindes.",
        "In vielen Fällen ist dieses Krankheitsbild mit einer Intelligenzminderung kombiniert."
    ],
    "F84.1 Atypischer Autismus": [
        "Ein Kind zeigt Symptome einer tiefgreifenden Entwicklungsstörung, die dem Autismus ähneln, aber die Symptome traten erst nach dem vierten Lebensjahr auf oder sind nicht voll ausgeprägt.",
        "Das Kriterium des Alters bei Beginn oder die Anzahl der Symptome für den frühkindlichen Autismus wird nicht ganz erfüllt.",
        "Oft tritt diese Form bei Kindern mit schwerster Intelligenzminderung auf, bei denen die Symptome schwer abgrenzbar sind.",
        "Es besteht dennoch eine deutliche Störung der sozialen Kommunikation und Interaktion.",
        "Die Diagnose wird gestellt, wenn das Bild autistisch wirkt, aber von der klassischen Norm abweicht."
    ],
    "F84.2 Rett-Syndrom": [
        "Ein Mädchen entwickelte sich im ersten Lebensjahr völlig normal, verliert dann aber plötzlich bereits erlernte Handfunktionen und beginnt mit typischen 'waschenden' Handbewegungen.",
        "Es kommt zu einem Stillstand der Kopfentwicklung und einem Verlust der Sprache.",
        "Die Störung wurde bisher fast ausschliesslich bei Mädchen beobachtet.",
        "Es handelt sich um eine schwere neurologische Entwicklungsstörung mit fortschreitendem Verlust motorischer Fähigkeiten.",
        "Die Symptome beginnen meist zwischen dem 7. und 24. Lebensmonat."
    ],
    "F84.5 Asperger-Syndrom": [
        "Ein hochintelligenter Junge spricht wie ein kleiner Professor, hat aber enorme Probleme, Witze oder nonverbale Signale seiner Mitschüler zu verstehen. Er hat ein extremes Fachwissen über Fahrstühle.",
        "Im Gegensatz zum frühkindlichen Autismus gibt es hier keine allgemeine Sprach- oder kognitive Entwicklungsverzögerung.",
        "Die soziale Interaktion ist durch mangelndes Einfühlungsvermögen und Taktgefühl massiv erschwert.",
        "Die Betroffenen halten starr an Routinen fest und zeigen oft motorische Ungeschicklichkeit.",
        "Die Diagnose wird oft erst im Schulalter gestellt, wenn die sozialen Anforderungen steigen."
    ],
    "F88 Andere Entwicklungsstörungen": [
        "Ein Kind zeigt ein ungewöhnliches Muster in der Entwicklung, das nicht in die gängigen Kategorien wie Autismus oder Sprachstörung passt.",
        "Die Beeinträchtigungen sind dennoch umschrieben und entwicklungsbezogen.",
        "Dazu gehört zum Beispiel die entwicklungsbedingte Agnosie.",
        "Es liegt eine klinisch relevante Abweichung von der normalen Reifung vor.",
        "Die Diagnose dient der Erfassung seltener Entwicklungsphänomene."
    ],
    "F89 Nicht näher bezeichnete Entwicklungsstörung": [
        "Es liegt eine deutliche Störung der Entwicklung vor, aber es ist noch unklar, ob sie primär die Sprache, die Motorik oder das Sozialverhalten betrifft.",
        "Diese Kategorie wird verwendet, wenn eine tiefgreifende Störung sicher ist, aber noch nicht weiter spezifiziert werden kann.",
        "Meist wird sie bei sehr jungen Kindern als Arbeitsdiagnose genutzt.",
        "Die Symptome sind klinisch bedeutsam und weichen von der Altersnorm ab.",
        "Eine weitere Verlaufsbeobachtung ist für eine genaue Zuordnung notwendig."
    ],
    "F90 Hyperkinetische Störungen (ADHS)": [
        "Ein achtjähriger Junge kann im Unterricht nicht stillsitzen, platzt ständig mit Antworten heraus und lässt sich von jedem Geräusch ablenken. Seine Hausaufgaben sind oft unvollständig.",
        "Die Symptome der Unaufmerksamkeit, Hyperaktivität und Impulsivität zeigen sich in mindestens zwei Lebensbereichen (Schule und Zuhause).",
        "Die Beschwerden müssen bereits vor dem siebten Lebensjahr begonnen haben.",
        "Es liegt keine andere psychische Störung wie eine Depression oder Psychose vor, die das Verhalten erklärt.",
        "Die betroffenen Kinder haben oft grosse Schwierigkeiten, ihre Impulse zu kontrollieren und Aufgaben zu strukturieren."
    ],
    "F91 Störungen des Sozialverhaltens": [
        "Ein Jugendlicher zeigt wiederholt aggressives Verhalten, stiehlt, schwänzt die Schule und quält absichtlich kleinere Kinder oder Tiere. Er zeigt keine Reue für sein Handeln.",
        "Es handelt sich um ein dauerhaftes Muster von unsozialem, aggressivem oder aufsässigem Verhalten.",
        "Die Handlungen verletzen grob die grundlegenden Rechte anderer oder soziale Normen.",
        "Die Symptomatik besteht seit mindestens sechs Monaten.",
        "Wird die Diagnose im Kontext von Depressionen gestellt, muss die Kategorie F92 geprüft werden."
    ],
    "F92 Kombinierte Störung des Sozialverhaltens und der Emotionen": [
        "Ein Kind fällt einerseits durch aggressives, aufsässiges Verhalten auf, zeigt aber gleichzeitig Anzeichen einer starken Depression mit Angstzuständen und Minderwertigkeitsgefühlen.",
        "Die Kriterien für eine Störung des Sozialverhaltens (F91) und für eine emotionale Störung (F93) sind beide erfüllt.",
        "Das unsoziale Verhalten scheint oft eine Reaktion auf die innere emotionale Not zu sein.",
        "Die Behandlung muss sowohl die Verhaltensauffälligkeiten als auch die zugrunde liegende emotionale Instabilität adressieren.",
        "Häufig leiden diese Kinder unter erheblichen familiären Spannungen."
    ],
    "F93 Emotionale Störungen des Kindesalters": [
        "Ein siebenjähriges Mädchen weigert sich panisch, in die Schule zu gehen, weil sie Angst hat, ihrer Mutter könne in der Zwischenzeit etwas Schlimmes zustossen.",
        "Es handelt sich um eine altersuntypische Steigerung normaler kindlicher Ängste (z.B. Trennungsangst).",
        "Dazu gehören auch phobische Störungen des Kindesalters oder soziale Ängstlichkeit.",
        "Die Angst bezieht sich auf spezifische kindliche Entwicklungsthemen und ist nicht generalisiert wie bei Erwachsenen.",
        "Die Störung muss vor dem sechsten Lebensjahr begonnen haben und die soziale Entwicklung behindern."
    ],
    "F94 Störungen sozialer Funktionen mit Beginn in der Kindheit und Jugend": [
        "Ein Kind spricht zu Hause völlig normal, verharrt aber im Kindergarten oder in der Schule in absolutem Schweigen (Elektiver Mutismus).",
        "Dazu gehört auch die reaktive Bindungsstörung infolge von schwerer Vernachlässigung oder Misshandlung.",
        "Die Störung zeigt sich primär in der Art und Weise, wie das Kind soziale Beziehungen zu Bezugspersonen oder Gleichaltrigen gestaltet.",
        "Andere Ursachen wie Autismus oder Intelligenzminderung wurden ausgeschlossen.",
        "Die Beeinträchtigungen treten meist in frühen Entwicklungsphasen auf und sind oft reaktiv auf das Umfeld."
    ],
    "F95 Ticstörungen": [
        "Ein Junge zeigt seit Monaten unwillkürliches, schnelles Augenzwinkern und zieht regelmässig die Schultern hoch. Manchmal stösst er auch Bellgeräusche aus.",
        "Die Bewegungen oder Lautäusserungen treten plötzlich auf und haben keinen erkennbaren Zweck.",
        "Beim Tourette-Syndrom treten multiple motorische Tics und mindestens ein vokaler Tic kombiniert auf.",
        "Die Symptome verstärken sich oft unter Stress und können kurzzeitig willentlich unterdrückt werden.",
        "Die Diagnose wird gestellt, wenn die Tics über einen Zeitraum von mindestens vier Wochen fast täglich auftreten."
    ],
    "F98 Andere Verhaltens- und emotionale Störungen mit Beginn in der Kindheit und Jugend (Enuresis / Enkopresis)": [
        "Ein sechsjähriges Kind nässt fast jede Nacht das Bett ein, obwohl es tagsüber bereits seit zwei Jahren trocken war. Organische Ursachen wurden vom Kinderarzt ausgeschlossen.",
        "Dazu gehören auch Stottern, Poltern oder das Einkoten (Enkopresis) ohne körperliche Begründung.",
        "Es besteht oft ein Zusammenhang mit belastenden Lebensereignissen wie der Geburt eines Geschwisterkindes.",
        "Die Verhaltensauffälligkeiten müssen für das Entwicklungsalter des Kindes unangemessen sein.",
        "Häufig liegen auch Fütterstörungen oder Pica-Verhalten (Essen von Unrat) in dieser Kategorie."
    ],
    "F99 Psychische Störung ohne nähere Angabe": [
        "Ein Patient zeigt deutliche Anzeichen einer psychischen Erkrankung, die eine Behandlung erfordert, aber eine genauere Einordnung ist derzeit nicht möglich.",
        "Diese Diagnose ist ein Platzhalter für Fälle, in denen die Symptome keiner anderen F-Diagnose zugeordnet werden können.",
        "Oft wird sie in Kriseninterventionen genutzt, wenn die Zeit für eine ausführliche Diagnostik fehlt.",
        "Die Angabe dient der formalen Erfassung einer psychiatrischen Behandlungsnotwendigkeit.",
        "Sie ist das unspezifischste Etikett innerhalb des Kapitels F der ICD-10."
    ]
};

// 2. Spiel-Variablen
let targetDiagnosis = "";
let currentStep = 0;
let isGameOver = false;
let guessedDiagnoses = [];
let isFreePlayMode = false;

// 3. DOM-Elemente
const searchInput = document.getElementById('search-input');
const autocompleteList = document.getElementById('autocomplete-list');
const alertBox = document.getElementById('alert-box');
const overlay = document.getElementById('overlay');
const titleElement = document.getElementById('game-title');

// 4. Start-Logik
document.getElementById('free-play-btn').addEventListener('click', () => {
    isFreePlayMode = true;
    initGame();
});

function initGame() {
    console.log("Initialisiere Spiel...");
    currentStep = 0;
    isGameOver = false;
    guessedDiagnoses = [];

    // Modus-Wahl
    if (isFreePlayMode) {
        const randomIndex = Math.floor(Math.random() * ICD10_LIST.length);
        targetDiagnosis = ICD10_LIST[randomIndex];
        if (titleElement) titleElement.textContent = "Wordle für ICD-10 - Frei";
    } else {
        const now = new Date();
        const dateSeed = now.getUTCFullYear() * 10000 + (now.getUTCMonth() + 1) * 100 + now.getUTCDate();
        const dailyIndex = dateSeed % ICD10_LIST.length;
        targetDiagnosis = ICD10_LIST[dailyIndex];
        if (titleElement) titleElement.textContent = "Wordle für ICD-10";
    }

    // UI Reset
    resetClueSlots();
    document.getElementById('guess-history').innerHTML = '';

    if (searchInput) {
        searchInput.disabled = false;
        searchInput.value = '';
    }

    if (alertBox) alertBox.classList.add('hidden');
    if (overlay) overlay.classList.add('hidden');

    // Den ersten Hinweis sofort aufdecken
    revealNextClue();
}

// 5. Autocomplete-Logik
if (searchInput) {
    searchInput.addEventListener('input', () => {
        console.log("Eingabe erkannt:", searchInput.value);
        if (isGameOver) return;

        const query = searchInput.value.toLowerCase().trim();
        autocompleteList.innerHTML = '';

        if (query.length < 1) {
            autocompleteList.style.display = 'none';
            return;
        }

        const queryParts = query.split(/\s+/);
        const matches = ICD10_LIST.filter(item => {
            const itemLower = item.toLowerCase();
            const alreadyGuessed = guessedDiagnoses.includes(item);
            return !alreadyGuessed && queryParts.every(part => itemLower.includes(part));
        }).slice(0, 50);

        if (matches.length > 0) {
            autocompleteList.style.display = 'block';
            matches.forEach(match => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.textContent = match;
                div.addEventListener('click', () => submitGuess(match));
                autocompleteList.appendChild(div);
            });
        } else {
            autocompleteList.style.display = 'none';
        }
    });
}

// 6. Spiel-Ablauf
function submitGuess(diagnosis) {
    if (isGameOver) return;

    guessedDiagnoses.push(diagnosis);
    const history = document.getElementById('guess-history');
    const item = document.createElement('div');
    item.className = 'history-item';
    item.textContent = "Tipp: " + diagnosis;
    history.appendChild(item);

    if (diagnosis === targetDiagnosis) {
        revealAllClues();
        finishGame(true);
    } else {
        currentStep++;
        if (currentStep < 5) {
            revealNextClue();
        } else {
            finishGame(false);
        }
    }

    searchInput.value = '';
    autocompleteList.style.display = 'none';
    setTimeout(scrollToBottom, 50);
}

function revealNextClue() {
    const cleanTarget = targetDiagnosis.trim();
    const dbKey = Object.keys(CLUES_DATABASE).find(key => key.trim() === cleanTarget);
    const clues = CLUES_DATABASE[dbKey];
    const slot = document.getElementById(`clue-${currentStep}`);

    if (slot) {
        slot.textContent = (clues && clues[currentStep]) ? clues[currentStep] : "Keine Falldaten fuer: " + targetDiagnosis;
        slot.classList.remove('locked');
        slot.classList.add('revealed');
    }
}

function finishGame(win) {
    isGameOver = true;
    searchInput.disabled = true;
    alertBox.classList.remove('hidden');
    if (overlay) overlay.classList.remove('hidden');

    // Grund-Text festlegen
    let message = win
        ? `<h2>Richtig gelöst! 🎉</h2><p>Lösung: <strong>${targetDiagnosis}</strong></p>`
        : `<h2>Schade!</h2><p>Die Lösung war: <strong>${targetDiagnosis}</strong></p>`;

    // Falls wir im freien Modus sind, fügen wir den "Nochmal spielen"-Button hinzu
    if (isFreePlayMode) {
        message += `<button id="restart-game-btn" class="primary-btn" style="margin-top: 20px;">Nächstes freies Spiel</button>`;
    }

    alertBox.innerHTML = message;
    alertBox.style.borderColor = win ? "#538d4e" : "#ba3a3a";

    // Event-Listener für den neuen Button (nur wenn er existiert)
    const restartBtn = document.getElementById('restart-game-btn');
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            initGame(); // Startet sofort eine neue Runde
        });
    }
}

// Hilfsfunktionen
function revealAllClues() {
    const cleanTarget = targetDiagnosis.trim();
    const dbKey = Object.keys(CLUES_DATABASE).find(key => key.trim() === cleanTarget);
    const clues = CLUES_DATABASE[dbKey];
    for (let i = 0; i < 5; i++) {
        const slot = document.getElementById(`clue-${i}`);
        if (slot && clues && clues[i]) slot.textContent = clues[i];
        if (slot) {
            slot.classList.remove('locked');
            slot.classList.add('revealed');
        }
    }
}

function resetClueSlots() {
    for (let i = 0; i < 5; i++) {
        const slot = document.getElementById(`clue-${i}`);
        if (slot) {
            slot.textContent = `Versteckter Hinweis ${i + 1}`;
            slot.classList.remove('revealed');
            slot.classList.add('locked');
        }
    }
}

function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

document.addEventListener('click', (e) => {
    if (e.target !== searchInput) autocompleteList.style.display = 'none';
});

// Start
initGame();
