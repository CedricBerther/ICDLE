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
        "Ein 78-jähriger Patient zeigt eine schleichende Vergesslichkeit im Alltag, die seit etwa zwei Jahren zunimmt. Er verlegt Gegenstände und verliert in Gesprächen den Faden.",
        "Neurologische Untersuchungen schliessen einen akuten Vitaminmangel oder eine Schilddrüsenunterfunktion als Ursache aus.",
        "Es zeigt sich ein deutlicher Verlust der Merkfähigkeit für neue Informationen, während Altgedächtnisinhalte noch relativ gut erhalten sind.",
        "Bildgebende Verfahren weisen eine betonte Atrophie im Bereich des Hippocampus und des temporalen Cortex auf.",
        "Die Symptomatik begann ohne fassbare vaskuläre Ereignisse und zeigt einen kontinuierlichen, fortschreitenden Verlauf."
    ],
    "F01 Vaskuläre Demenz": [
        "Eine 72-jährige Patientin berichtet von plötzlichen Verschlechterungen ihrer geistigen Leistungsfähigkeit nach einer Krankheitsphase.",
        "Im Gegensatz zu rein degenerativen Prozessen treten hier neurologische Herdsymptome wie diskrete Lähmungserscheinungen oder Gangstörungen auf.",
        "In der Anamnese finden sich langjähriger Bluthochdruck, Diabetes mellitus oder bereits stattgefundene transitorische ischämische Attacken.",
        "Die kognitiven Einbussen betreffen oft ungleichmässig verschiedene Bereiche, wobei die psychomotorische Geschwindigkeit meist reduziert ist.",
        "Die MRT zeigt multiple Infarktareale oder eine ausgeprägte Marklagergliose als Korrelat der Gefässschädigung."
    ],
    "F02 Demenz bei anderenorts klassifizierten Krankheiten": [
        "Ein 65-jähriger Patient zeigt kognitive Defizite und eine verlangsamte Informationsverarbeitung bei gleichzeitigem Tremor und Rigor.",
        "Die Abklärung bezüglich einer primären Alzheimer-Demenz liefert keine eindeutigen Belege für einen rein kortikalen Abbauprozess.",
        "Es liegt eine bereits diagnostizierte neurologische Grunderkrankung vor, wie zum Beispiel Morbus Parkinson oder Chorea Huntington.",
        "Die kognitiven Symptome werden als direkte Folge oder Begleiterscheinung dieser spezifischen somatischen Krankheit gewertet.",
        "Das klinische Bild ist geprägt durch die Interaktion zwischen der neurologischen Grunderkrankung und dem demenziellen Abbau."
    ],
    "F03 Nicht näher bezeichnete Demenz": [
        "Bei einer 85-jährigen Person wird ein allgemeiner Verlust der geistigen Fähigkeiten beobachtet, der die Lebensführung massiv einschränkt.",
        "Spezifische Ausschlusskriterien für vaskuläre oder neurodegenerative Ursachen können aufgrund fehlender Vorbefunde nicht sicher angewendet werden.",
        "Das Leitsymptom ist ein signifikanter Abbau von Gedächtnis und Urteilsvermögen ohne eindeutige Ätiologie.",
        "Die Diagnose wird gestellt, wenn die allgemeinen Kriterien einer Demenz erfüllt sind, aber keine genauere Differenzierung möglich ist.",
        "Oft wird diese Diagnose verwendet, wenn die Diagnostik noch nicht abgeschlossen oder das Bild sehr uneinheitlich ist."
    ],
    "F04 Organisches amnestisches Syndrom, nicht durch Alkohol oder andere psychotrope Substanzen bedingt": [
        "Ein 42-jähriger Patient leidet unter einer massiven Störung des Kurzzeitgedächtnisses nach einer schweren Kopfverletzung.",
        "Eine Demenz kann ausgeschlossen werden, da andere kognitive Funktionen wie die allgemeine Intelligenz weitgehend erhalten sind.",
        "Die Merkfähigkeitsstörung führt dazu, dass der Patient Informationen bereits nach wenigen Minuten wieder vergisst.",
        "Häufig liegt eine Schädigung dienzephaler oder hippokampaler Strukturen durch Trauma, Hypoxie oder Enzephalitis vor.",
        "Im Gegensatz zum Delir fehlen globale Bewusstseinsstörungen oder ausgeprägte Wahrnehmungsverzerrungen."
    ],
    "F05 Delir, nicht durch Alkohol oder andere psychotrope Substanzen bedingt": [
        "Eine 82-jährige Patientin wirkt im Krankenhaus plötzlich extrem verwirrt, unruhig und ist zeitlich sowie örtlich desorientiert.",
        "Die Symptomatik entwickelte sich innerhalb weniger Stunden nach einer Operation und schwankt im Tagesverlauf stark.",
        "Es zeigen sich Störungen des Schlaf-Wach-Rhythmus sowie visuelle Halluzinationen oder illusionäre Verkennungen.",
        "Die Ursache ist meist ein somatischer Faktor wie ein Harnwegsinfekt, Exsikkose oder eine postoperative Stoffwechselstörung.",
        "Nach Behandlung der körperlichen Ursache bildet sich die Symptomatik meist innerhalb von Tagen zurück."
    ],
    "F06 Andere psychische Störungen aufgrund einer Schädigung des Gehirns oder einer körperlichen Krankheit": [
        "Ein 48-jähriger Patient leidet unter starken Stimmungsschwankungen und Antriebslosigkeit, die zeitgleich mit einer schweren endokrinen Erkrankung auftraten.",
        "Eine primäre depressive Episode wird ausgeschlossen, da die psychische Symptomatik direkt an den Verlauf der körperlichen Krankheit gekoppelt ist.",
        "Dazu gehören Zustände wie die organische Halluzinose, die organische katatone Störung oder die organische Angststörung.",
        "Die psychischen Symptome sind die direkte physiologische Folge einer zerebralen Funktionsstörung oder einer systemischen Krankheit.",
        "Die Diagnose erfordert den Nachweis einer kausalen Verbindung zwischen der körperlichen Diagnose und der psychischen Manifestation."
    ],
    "F07 Persönlichkeits- und Verhaltensstörungen aufgrund einer Krankheit oder Schädigung des Gehirns": [
        "Nach einem schweren Unfall zeigt ein früher 35-jähriger besonnener Mann plötzlich eine ausgeprägte Impulsivität und Distanzlosigkeit.",
        "Es handelt sich nicht um eine vorbestehende Persönlichkeitsstörung, da das Verhalten vor dem Ereignis völlig unauffällig war.",
        "Charakteristisch sind eine emotionale Labilität, mangelnde Affektkontrolle und eine Veränderung der sozialen Urteilsfähigkeit.",
        "Die kognitiven Fähigkeiten können erhalten sein, aber die Fähigkeit zur sozialen Steuerung ist massiv beeinträchtigt.",
        "Das klinische Bild wird oft als 'Frontalhirnsyndrom' bezeichnet, wenn die Läsion die präfrontalen Areale betrifft."
    ],
    "F09 Nicht näher bezeichnete organische psychische Störung": [
        "Eine 50-jährige Patientin zeigt diffuse psychische Symptome, bei denen ein Zusammenhang mit einer körperlichen Erkrankung sicher ist.",
        "Andere organische Syndrome wie Delir oder Amnesie passen nicht exakt auf das komplexe Beschwerdebild.",
        "Die Diagnose wird vergeben, wenn die organische Genese sicher ist, aber die klinischen Merkmale uneinheitlich sind.",
        "Es besteht eine nachgewiesene zerebrale oder systemische Beteiligung, die die Psyche beeinflusst.",
        "Diese Kategorie dient als Auffangbecken für unklare Fälle mit gesichert organischem Hintergrund."
    ],
    "F10 Psychische und Verhaltensstörungen durch Alkohol": [
        "Ein 52-jähriger Patient stellt sich mit Zittern und innerer Unruhe vor, nachdem er seinen Konsum reduziert hat.",
        "Eine primäre Angststörung wurde ausgeschlossen, da die Symptome spezifisch im Kontext des Alkoholkonsums auftreten.",
        "Es zeigen sich Kriterien der Abhängigkeit wie Toleranzentwicklung, Kontrollverlust und Vernachlässigung von Interessen.",
        "Folgeschäden wie eine Fettleber oder periphere Neuropathien untermauern die Diagnose des chronischen Missbrauchs.",
        "In schweren Fällen können Entzugsdelirien oder alkoholbedingte Psychosen mit akustischen Halluzinationen auftreten."
    ],
    "F11 Psychische und Verhaltensstörungen durch Opioide": [
        "Ein 28-jähriger Mann wirkt extrem schläfrig, hat stark verengte Pupillen und zeigt eine verlangsamte Atmung.",
        "Die Symptomatik ist nicht durch eine primäre Schlafsucht (Narkolepsie) oder neurologische Erkrankung erklärbar.",
        "Beim Absetzen der Substanz treten massive Entzugssymptome wie Muskelschmerzen, Tränenfluss und ausgeprägte Dysphorie auf.",
        "Es besteht ein starkes Verlangen (Craving) nach Substanzen wie Heroin, Fentanyl oder Morphin.",
        "Die Lebensführung ist meist vollständig auf die Beschaffung und den Konsum der Substanz ausgerichtet."
    ],
    "F12 Psychische und Verhaltensstörungen durch Cannabinoide": [
        "Ein 22-jähriger Student berichtet über Konzentrationsprobleme, Motivationsverlust und gelegentliche paranoide Gedanken bei täglichem Rauschmittelkonsum.",
        "Psychotische Symptome durch eine Schizophrenie wurden ausgeschlossen, da die Paranoia nur unmittelbar nach dem Konsum auftritt.",
        "Es zeigt sich ein amotivationales Syndrom mit Rückzug aus dem sozialen Leben und Leistungsabfall.",
        "Trotz des Wissens um die negativen Auswirkungen auf das Studium kann der Konsum nicht eingestellt werden.",
        "Die Diagnose umfasst akute Intoxikationen, schädlichen Gebrauch oder ein klares Abhängigkeitssyndrom von Cannabis."
    ],
    "F13 Psychische und Verhaltensstörungen durch Sedativa oder Hypnotika": [
        "Eine 68-jährige Dame wirkt oft benommen und klagt über häufige Stürze. Sie nimmt seit Jahren Tabletten gegen Schlaflosigkeit ein.",
        "Eine neurologische Ursache für die Gangunsicherheit wurde nicht gefunden, aber die Patientin steigert eigenmächtig die Dosis ihrer Beruhigungsmittel.",
        "Es besteht eine psychische und oft auch physische Abhängigkeit von Benzodiazepinen oder verwandten Stoffen.",
        "Ein plötzliches Absetzen führt zu reboundartiger Schlaflosigkeit, Angst und im Extremfall zu epileptischen Anfällen.",
        "Die Sucht entwickelt sich oft iatrogen durch die langfristige Verschreibung von Schlafmitteln."
    ],
    "F14 Psychische und Verhaltensstörungen durch Kokain": [
        "Ein 34-jähriger Patient wird mit Herzrasen, extremem Rededrang und Grössenideen eingeliefert. Er hat seit zwei Tagen nicht mehr geschlafen.",
        "Eine manische Episode wurde in Erwägung gezogen, doch die Symptome klingen nach wenigen Stunden rasch ab, gefolgt von einem tiefen Erschöpfungszustand.",
        "Der Patient berichtet von regelmässigem 'Schnupfen' einer weissen Substanz zur Leistungssteigerung im Job.",
        "Es zeigen sich paranoide Wahnideen und taktile Halluzinationen (Gefühl von Insekten unter der Haut).",
        "Nach dem Konsumstopp folgen oft schwere depressive Verstimmungen und ein ausgeprägtes Verlangen nach erneutem Konsum."
    ],
    "F15 Psychische und Verhaltensstörungen durch andere Stimulanzien, einschliesslich Koffein": [
        "Ein 29-jähriger Patient zeigt Unruhe, Schlafstörungen und eine übermässige Wachheit. Er nimmt ständig Aufputschmittel.",
        "ADHS wurde als Ursache ausgeschlossen, da die Hyperaktivität erst im Erwachsenenalter im Zusammenhang mit der Substanzeinnahme begann.",
        "Der Konsum umfasst Stoffe wie Amphetamine, MDMA oder exzessive Mengen an Koffein.",
        "Langzeitfolgen sind oft Gewichtsverlust, Schlafentzugssyndrom und psychotische Episoden mit Verfolgungswahn.",
        "Die Diagnose wird gestellt, wenn der Gebrauch zu klinisch relevanten Beeinträchtigungen oder Entzugserscheinungen führt."
    ],
    "F16 Psychische und Verhaltensstörungen durch Halluzinogene": [
        "Ein 21-jähriger Mann erlebt intensive Veränderungen der Wahrnehmung, wobei Farben gehört und Töne gesehen werden (Synästhesien).",
        "Eine Schizophrenie ist unwahrscheinlich, da die Symptome zeitlich eng auf die Einnahme von Substanzen wie LSD oder Psilocybin begrenzt sind.",
        "Es können 'Flashbacks' auftreten, bei denen die Halluzinationen ohne erneuten Konsum plötzlich wiederkehren.",
        "Die psychische Störung kann sich auch als 'Horrortrip' mit massiven Panikattacken und Depersonalisationserlebnissen manifestieren.",
        "Im Vordergrund stehen die tiefgreifenden Veränderungen des Bewusstseinszustandes und der Sinneswahrnehmungen."
    ],
    "F17 Psychische und Verhaltensstörungen durch Tabak": [
        "Ein 48-jähriger Patient möchte aufhören, scheitert aber wiederholt an starker Reizbarkeit und Konzentrationsstörungen.",
        "Andere psychische Ursachen für die Unruhe liegen nicht vor, die Symptome bessern sich sofort nach dem Rauchen einer Zigarette.",
        "Es besteht ein klarer zwanghafter Drang zum Konsum von Nikotin trotz bekannter gesundheitlicher Risiken.",
        "Die Toleranzentwicklung zeigt sich darin, dass die Menge der konsumierten Zigaretten über die Jahre stetig zugenommen hat.",
        "Die Diagnose wird meist im Rahmen von Entwöhnungsprogrammen relevant, wenn das Abhängigkeitssyndrom klinisch manifest ist."
    ],
    "F18 Psychische und Verhaltensstörungen durch flüchtige Lösungsmittel": [
        "Ein 16-jähriger Jugendlicher zeigt Koordinationsstörungen, verwaschene Sprache und Euphorie. Er riecht stark nach Klebstoff oder Benzin.",
        "Alkoholintoxikation wurde ausgeschlossen, da keine entsprechenden Blutwerte vorliegen und die Wirkung extrem kurz anhält.",
        "Es handelt sich um das Inhalieren von Dämpfen (Sniffen) zur Erzeugung eines Rauschzustandes.",
        "Wiederholter Gebrauch führt zu Hirnschädigungen, Nierenschäden und psychischen Veränderungen wie Apathie.",
        "Die Diagnose ist spezifisch für den Missbrauch von Industriechemikalien, Gasen oder Reinigungsmitteln."
    ],
    "F19 Psychische und Verhaltensstörungen durch multiplen Substanzgebrauch": [
        "Ein 30-jähriger Patient nimmt unkontrolliert verschiedene Drogen wie Alkohol, Beruhigungsmittel und Amphetamine gleichzeitig ein.",
        "Die Symptomatik ist chaotisch und wechselhaft, da sich die Wirkungen der verschiedenen Substanzen gegenseitig beeinflussen.",
        "Der Patient konsumiert willkürlich, was gerade verfügbar ist, um seine psychische Befindlichkeit zu regulieren.",
        "Es liegt ein Abhängigkeitsmuster vor, bei dem die spezifische Substanz zweitrangig gegenüber dem Wunsch nach Rausch ist.",
        "Die Diagnose wird vergeben, wenn das Konsumverhalten nicht einer einzelnen Substanzgruppe (F10-F18) zugeordnet werden kann."
    ],
    "F20.0 Paranoide Schizophrenie": [
        "Ein 25-jähriger Mann fühlt sich beobachtet und glaubt, dass Nachbarn durch die Wände seine Gedanken lesen könnten.",
        "Eine organische Ursache durch Drogen oder Hirntumoren wurde durch Tests und Bildgebung ausgeschlossen.",
        "Im Vordergrund stehen akustische Halluzinationen (Stimmenhören) und ein ausgeprägter Verfolgungswahn.",
        "Die Affektivität des Patienten wirkt oft starr oder unangemessen (Parathymie), während das Denken formal zerfahren sein kann.",
        "Die Symptome bestehen bereits seit über einem Monat und führen zu einem massiven Bruch in der Lebensbiografie."
    ],
    "F20.1 Hebephrene Schizophrenie": [
        "Ein 19-jähriger Jugendlicher zeigt ein seltsam unpassendes Lachen, flachen Affekt und ein völlig unvorhersehbares Verhalten.",
        "Eine reine Pubertätskrise oder ADHS erklären das Ausmass der Desorganisation und des emotionalen Abbaus nicht.",
        "Im Gegensatz zur paranoiden Form stehen Halluzinationen und Wahn weniger im Vordergrund als die Störung von Antrieb und Stimmung.",
        "Das Verhalten wirkt ziellos, fragmentiert und für Aussenstehende oft provozierend oder sinnlos.",
        "Die Prognose ist meist ungünstiger, da sich die Störung schleichend entwickelt und zu einem raschen sozialen Rückzug führt."
    ],
    "F20.2 Katatone Schizophrenie": [
        "Ein 30-jähriger Patient verharrt stundenlang in einer unnatürlichen Körperhaltung und zeigt keinerlei Reaktion auf Ansprache.",
        "Neurologische Erkrankungen wie Epilepsie oder Enzephalitis wurden als Ursache für die Bewegungsstörung ausgeschlossen.",
        "Es zeigen sich Phänomene wie 'Wächserne Biegsamkeit' (Flexibilitas cerea) oder Mutismus.",
        "Der Wechsel zwischen Stupor (völliger Reglosigkeit) und katatoner Erregung ist charakteristisch für dieses Krankheitsbild.",
        "Die psychomotorischen Störungen beherrschen das klinische Bild und stellen einen psychiatrischen Notfall dar."
    ],
    "F20.3 Undifferenzierte Schizophrenie": [
        "Ein 28-jähriger Patient weist die allgemeinen Kriterien einer Schizophrenie auf, zeigt aber eine Mischung aus verschiedenen Symptomen.",
        "Die Kriterien für eine rein paranoide, hebephrene oder katatone Form werden nicht vollständig erfüllt.",
        "Die Symptomatik ist so vielgestaltig, dass keine der klassischen Unterformen die Vorherrschaft übernimmt.",
        "Es treten typische Ich-Störungen und formal-gedankliche Auffälligkeiten auf, die das soziale Leben beeinträchtigen.",
        "Diese Diagnose wird oft gestellt, wenn das Krankheitsbild im Zeitverlauf wechselt oder sehr komplex ist."
    ],
    "F20.4 Postschizophrene Depression": [
        "Nach dem Abklingen einer akuten psychotischen Phase versinkt ein 32-jähriger Patient in eine tiefe Traurigkeit und Antriebslosigkeit.",
        "Die depressiven Symptome sind nicht nur eine Reaktion auf die Diagnose, sondern Teil des schizophrenen Krankheitsverlaufs.",
        "Einige Restsymptome der Schizophrenie wie leise Stimmen oder Misstrauen können noch vorhanden sein.",
        "Es besteht ein erhöhtes Suizidrisiko in dieser Phase des Übergangs von der Psychose zur depressiven Verarbeitung.",
        "Die Diagnose erfordert, dass im letzten Jahr eine Schizophrenie vorlag und nun die depressiven Merkmale dominieren."
    ],
    "F20.5 Schizophrenes Residuum": [
        "Ein 45-jähriger Patient, der früher unter schweren psychotischen Schüben litt, zeigt nun einen chronischen Zustand von Antriebslosigkeit.",
        "Die Symptomatik ist stabil negativ geprägt, wobei soziale Isolation und mangelnde Selbstfürsorge im Vordergrund stehen.",
        "In der Vorgeschichte muss mindestens eine eindeutige psychotische Episode mit Wahn oder Halluzinationen dokumentiert sein.",
        "Es zeigen sich sogenannte 'Minussymptome' wie Sprachverarmung, Apathie und psychomotorische Verlangsamung.",
        "Die Diagnose wird gestellt, wenn die produktiven (positiven) Symptome seit mindestens 12 Monaten minimiert sind."
    ],
    "F20.6 Schizophrenia simplex": [
        "Ein 21-jähriger Mann zieht sich über Jahre hinweg immer mehr aus der Gesellschaft zurück und verliert jegliches Interesse an Arbeit.",
        "Eine Depression wurde ausgeschlossen, da eher eine allgemeine Verflachung des Wesens als ein Leidensdruck vorliegt.",
        "Die Störung verläuft schleichend und ist durch eine fortschreitende Verarmung der Persönlichkeit gekennzeichnet.",
        "Es treten keine deutlichen Wahnvorstellungen oder Halluzinationen auf, was die Diagnose oft erschwert.",
        "Der Patient wirkt zunehmend verschroben, wunderlich und unfähig, soziale Anforderungen zu erfüllen."
    ],
    "F21 Schizotype Störung": [
        "Eine 24-jährige Frau fällt durch exzentrisches Verhalten, seltsame Kleidung und ein tiefes Misstrauen gegenüber anderen auf.",
        "Die Kriterien für eine Schizophrenie werden nie ganz erfüllt, da kein manifester Wahn oder dauerhafte Halluzinationen vorliegen.",
        "Der soziale Rückzug und die affektive Kühle bestehen meist schon seit der frühen Adoleszenz.",
        "Das Denken ist oft vage, umständlich oder metaphorisch, ohne völlig zerfahren zu sein.",
        "Es besteht eine genetische Nähe zum schizophrenen Formenkreis, aber die Symptome bleiben auf einem subpsychotischen Niveau."
    ],
    "F22 Anhaltende wahnhafte Störungen": [
        "Ein 58-jähriger Mann ist felsenfest davon überzeugt, dass seine Frau ihn betrügt, obwohl es keinerlei Beweise gibt.",
        "Eine Schizophrenie ist unwahrscheinlich, da keine Ich-Störungen, Halluzinationen oder Denkstörungen vorliegen.",
        "Der Wahn bezieht sich meist auf ein einzelnes Thema wie Eifersucht, Grössenwahn oder körperliche Missbildung.",
        "Die Wahnideen sind über einen Zeitraum von mindestens drei Monaten stabil und unkorrigierbar.",
        "Der Patient wirkt ausserhalb des Wahnsystems psychisch gesund und sozial integriert."
    ],
    "F23 Akute vorübergehende psychotische Störungen": [
        "Eine 26-jährige Frau entwickelt innerhalb weniger Tage eine schwere Psychose mit Wahn nach einem massiven privaten Schock.",
        "Die Symptomatik hält nicht lange genug an, um eine Schizophrenie (Dauer > 1 Monat) zu diagnostizieren.",
        "Oft tritt nach spätestens zwei bis drei Monaten eine vollständige Genesung ohne bleibende Defizite ein.",
        "Häufig stehen polymorphe Symptome im Vordergrund, die sich rasch in ihrer Intensität und Art verändern.",
        "Die Störung ist meist eng mit belastenden Lebensereignissen verknüpft, tritt aber plötzlich und dramatisch auf."
    ],
    "F24 Induzierte wahnhafte Störung": [
        "Zwei Schwestern (42 und 45 Jahre), die sehr isoliert leben, teilen die Überzeugung, dass sie von einer Geheimorganisation verfolgt werden.",
        "Die psychische Störung der einen Person verschwindet meist, wenn sie von der dominanten Person getrennt wird.",
        "Die dominante Person (Induzent) leidet meist selbst an einer schizophrenen oder wahnhaften Störung.",
        "Es besteht eine enge emotionale Bindung zwischen den beteiligten Personen, oft innerhalb einer Familie.",
        "Dieses Phänomen wird klassischerweise auch als 'Folie à deux' bezeichnet."
    ],
    "F25 Schizoaffektive Störungen": [
        "Ein 35-jähriger Patient zeigt gleichzeitig schwere depressive Symptome und eindeutig schizophrene Merkmale wie Gedankenentzug.",
        "Eine rein affektive Störung mit psychotischen Zügen wird ausgeschlossen, da der Wahn nicht zum Stimmungsbild passt.",
        "Es gibt Phasen, in denen sowohl manische oder depressive als auch schizophrene Symptome gleichwertig nebeneinanderstehen.",
        "Die Prognose liegt meist zwischen der einer reinen Schizophrenie und einer rein affektiven Störung.",
        "Die Diagnose erfordert, dass die schizophrenen Symptome für sich genommen die Kriterien erfüllen würden."
    ],
    "F30 Manische Episode": [
        "Ein 33-jähriger Patient ist seit einer Woche extrem aufgekratzt, schläft kaum noch und gibt Unmengen an Geld aus.",
        "Drogeneinfluss durch Kokain oder Amphetamine wurde durch ein Screening ausgeschlossen.",
        "Es bestehen Grössenwahn, Distanzlosigkeit und eine massive Steigerung des Antriebs, die zur sozialen Selbstgefährdung führt.",
        "Die Stimmung ist entweder euphorisch-gehoben oder gereizt-aggressiv.",
        "Die Episode muss mindestens eine Woche anhalten und die normale Lebensführung massiv beeinträchtigen."
    ],
    "F31 Bipolare affektive Störung": [
        "Eine 38-jährige Patientin berichtet, dass sie früher Phasen extremer Traurigkeit hatte, aber auch Zeiten, in denen sie völlig überdreht war.",
        "Es handelt sich nicht um eine rezidivierende Depression, da mindestens eine manische oder hypomanische Episode in der Biografie vorliegt.",
        "Der Wechsel zwischen depressiven Tiefs und manischen Hochs prägt den gesamten Lebensverlauf.",
        "Zwischen den Episoden können Phasen vollkommener psychischer Gesundheit (Euthymie) liegen.",
        "Die Diagnose wird oft erst nach Jahren gestellt, da die manischen Phasen oft nicht als krankhaft erlebt werden."
    ],
    "F32.0 Leichte depressive Episode": [
        "Ein 42-jähriger Patient fühlt sich seit drei Wochen niedergeschlagen und weniger energiegeladen. Er geht seiner Arbeit noch nach.",
        "Es liegen mindestens zwei Hauptsymptome wie gedrückte Stimmung und Interessenverlust vor, aber die soziale Funktion ist erhalten.",
        "Der Patient klagt über leichte Schlafstörungen und eine etwas verminderte Konzentration.",
        "Die Symptome führen zu subjektivem Leiden, aber nicht zu einem völligen Zusammenbruch des Alltags.",
        "Insgesamt müssen etwa 4 bis 5 Symptome der depressiven Checkliste erfüllt sein."
    ],
    "F32.1 Mittelgradige depressive Episode": [
        "Eine 35-jährige Frau kann ihren Haushalt kaum noch bewältigen und hat sich von Freunden fast völlig zurückgezogen.",
        "Die Beeinträchtigung ist so stark, dass die berufliche Tätigkeit meist nicht mehr ausgeübt werden kann.",
        "Es finden sich deutlich ausgeprägte Symptome wie Appetitverlust, Libidoverlust und frühmorgendliches Erwachen.",
        "Mindestens zwei Hauptsymptome und drei bis vier Zusatzsymptome sind über mindestens zwei Wochen vorhanden.",
        "Die Patientin empfindet eine deutliche Schwere der Symptomatik, hat aber noch keine suizidalen Handlungen geplant."
    ],
    "F32.2 Schwere depressive Episode ohne psychotische Symptome": [
        "Ein 50-jähriger Mann liegt fast den ganzen Tag im Bett, vernachlässigt seine Körperpflege und sieht keinen Sinn mehr im Leben.",
        "Es besteht eine massive psychomotorische Hemmung und ein fast vollständiger Verlust an Vitalgefühlen.",
        "Suizidgedanken sind sehr präsent und stellen eine akute Gefahr dar.",
        "Halluzinationen oder Wahnvorstellungen liegen jedoch ausdrücklich nicht vor.",
        "Alle drei Hauptsymptome (Stimmung, Antrieb, Interessen) sind in schwerer Ausprägung vorhanden."
    ],
    "F32.3 Schwere depressive Episode mit psychotischen Symptomen": [
        "Eine 55-jährige Patientin ist überzeugt, dass ihr Körper innerlich verfault und sie für den Hunger in der Welt verantwortlich ist.",
        "Zusätzlich zur maximalen depressiven Symptomatik treten Wahngedanken auf, die meist stimmungskongruent sind.",
        "Die Patientin hört möglicherweise anklagende Stimmen, die ihr Versagen kommentieren.",
        "Eine einfache Depression liegt hier nicht mehr vor, da der Realitätsbezug durch den Wahn verloren gegangen ist.",
        "Die Behandlung erfordert zwingend eine Kombination aus Antidepressiva und Antipsychotika."
    ],
    "F33 Rezidivierende depressive Störung": [
        "Ein 48-jähriger Patient leidet zum vierten Mal innerhalb von fünf Jahren an einer Phase schwerer Depression.",
        "In der gesamten Lebensgeschichte gab es niemals Anzeichen für eine manische oder hypomanische Phase.",
        "Die einzelnen Episoden können unterschiedlich schwer ausgeprägt sein (leicht, mittel oder schwer).",
        "Häufig besteht eine familiäre Vorbelastung für affektive Erkrankungen.",
        "Die Diagnose wird gestellt, wenn mindestens zwei depressive Episoden durch ein symptomfreies Intervall getrennt waren."
    ],
    "F34 Anhaltende affektive Störungen (Dysthymia / Zyklothymia)": [
        "Eine 30-jährige Person beschreibt sich seit ihrer Jugend als 'Melancholiker' und fühlt sich fast ständig etwas müde und freudlos.",
        "Die Beschwerden halten bereits seit über zwei Jahren fast ununterbrochen an.",
        "Bei der Zyklothymia schwankt die Stimmung ständig zwischen leichter Heiterkeit und leichter Niedergeschlagenheit.",
        "Die Kriterien für eine schwere depressive oder manische Episode werden zu keinem Zeitpunkt erfüllt.",
        "Es handelt sich um eine chronische Stimmungsinstabilität, die oft als Teil des Charakters wahrgenommen wird."
    ],
    "F40.0 Agoraphobie": [
        "Eine 34-jährige Frau traut sich nicht mehr allein auf grosse Plätze oder in Menschenmengen, aus Angst, keine Hilfe zu bekommen.",
        "In weiten, offenen Räumen oder in öffentlichen Verkehrsmitteln bekommt sie Herzrasen und Atemnot.",
        "Oft ist die Angst mit der Sorge vor einer Panikattacke in der Öffentlichkeit verbunden.",
        "Die Patientin vermeidet die angstauslösenden Situationen konsequent oder erträgt sie nur unter massiver Qual.",
        "In schweren Fällen führt dies dazu, dass die Betroffenen ihre Wohnung überhaupt nicht mehr verlassen."
    ],
    "F40.1 Soziale Phobien": [
        "Ein 22-jähriger Mann meidet Partys und berufliche Besprechungen, weil er fürchtet, sich lächerlich zu machen.",
        "Beim Sprechen vor anderen bekommt er einen hochroten Kopf, zittert und beginnt stark zu schwitzen.",
        "Es handelt sich nicht um einfache Schüchternheit, da der Leidensdruck den Alltag massiv einschränkt.",
        "Die Angst bezieht sich spezifisch auf Situationen, in denen die Person im Mittelpunkt der Aufmerksamkeit steht.",
        "Oft wird Alkohol als 'Selbstmedikation' eingesetzt, um soziale Ängste in Gruppen zu lindern."
    ],
    "F40.2 Spezifische Phobien": [
        "Eine 28-jährige Patientin gerät in Panik, wenn sie eine Spinne sieht, selbst wenn diese klein und völlig harmlos ist.",
        "Die Angst tritt ausschliesslich bei ganz bestimmten Objekten oder Situationen auf (z.B. Höhen, Blut, Spritzen).",
        "Der Kontakt mit dem Auslöser führt fast immer zu einer unmittelbaren Angstreaktion.",
        "Die Betroffene unternimmt grosse Anstrengungen, um dem spezifischen Reiz aus dem Weg zu gehen.",
        "Andere psychische Symptome wie Wahn oder generalisierte Angst liegen nicht vor."
    ],
    "F41.0 Panikstörung": [
        "Ein 29-jähriger Patient erlebt plötzlich auftretende Anfälle von Todesangst mit heftigem Herzklopfen aus heiterem Himmel.",
        "Kardiologische Untersuchungen haben keine organische Ursache für das Herzrasen ergeben.",
        "Die Attacken dauern meist nur einige Minuten, hinterlassen aber eine ausgeprägte 'Angst vor der Angst'.",
        "Zwischen den Anfällen ist der Patient weitgehend angstfrei, sofern er nicht an die nächste Attacke denkt.",
        "Die Diagnose wird gestellt, wenn innerhalb eines Monats mehrere schwere Panikattacken ohne Auslöser aufgetreten sind."
    ],
    "F41.1 Generalisierte Angststörung": [
        "Eine 40-jährige Frau macht sich ständig Sorgen um die Gesundheit ihrer Kinder, ihre Finanzen und mögliche Unfälle.",
        "Die Angst ist nicht auf ein bestimmtes Objekt oder eine Situation bezogen, sondern 'frei flottierend'.",
        "Körperliche Symptome wie ständige Muskelverspannung, Reizbarkeit und Schlafstörungen begleiten die Sorgen.",
        "Der Patientin fällt es schwer, diese Grübeleien zu kontrollieren, obwohl sie die Übertriebenheit oft erkennt.",
        "Die Lebensqualität ist durch die ständige Anspannung und die Erwartungsangst massiv gemindert."
    ],
    "F41.2 Angst und depressive Störung, gemischt": [
        "Der 45-jährige Patient beschreibt einen Zustand der „Zerrissenheit“: Er fühlt sich getrieben und nervös, aber auch antriebslos.",
        "Das Besondere hier ist: Keine der beiden Symptomgruppen ist für sich allein genommen schwer genug für eine Einzeldiagnose.",
        "Es zeigt sich ein „Mischbild“ aus vegetativen Beschwerden (Herzklopfen) und klassischen Anhedonien (Freudlosigkeit).",
        "Diese Codierung wird besonders häufig in der Primärversorgung genutzt, wenn das klinische Bild uneinheitlich ist.",
        "Sind die depressiven Symptome schwerwiegend genug für eine depressive Episode, hat diese Diagnose keinen Vorrang."
    ],
    "F42 Zwangsstörung": [
        "Ein 38-jähriger Mann muss jeden Abend kontrollieren, ob der Herd ausgeschaltet ist, und zwar genau 20 Mal hintereinander.",
        "Er erkennt die Sinnlosigkeit seines Verhaltens, kann aber dennoch nicht damit aufhören.",
        "Die Zwangsgedanken oder Zwangshandlungen nehmen täglich mehr als eine Stunde Zeit in Anspruch.",
        "Die Handlungen dienen dazu, ein vermeintliches Unheil abzuwenden, das rational in keinem Zusammenhang steht.",
        "Die Symptomatik führt zu erheblichen Behinderungen im sozialen und beruflichen Leben."
    ],
    "F43.0 Akute Belastungsreaktion": [
        "Unmittelbar nach einem schweren Unfall wirkt ein 30-jähriger Beteiligter wie betäubt und starrt ins Leere.",
        "Kurz darauf wechselt der Zustand in eine Phase von Unruhe, Zittern und Herzrasen.",
        "Die Symptome treten innerhalb von Minuten nach dem traumatischen Ereignis auf.",
        "Der Zustand klingt normalerweise innerhalb von Stunden oder spätestens nach zwei bis drei Tagen wieder ab.",
        "Es handelt sich um eine Reaktion auf ein aussergewöhnlich belastendes Ereignis bei einer sonst gesunden Person."
    ],
    "F43.1 Posttraumatische Belastungsstörung": [
        "Ein 35-jähriger Soldat leidet Monate nach seinem Einsatz unter quälenden Erinnerungsbildern, die sich ungewollt aufdrängen.",
        "Es treten sogenannte Flashbacks und Albträume auf, in denen das Trauma wiedererlebt wird.",
        "Der Patient fühlt sich innerlich wie taub und zieht sich emotional von seinen Mitmenschen zurück.",
        "Ein Zustand von chronischer Übererregung mit Schlafstörungen und Konzentrationsproblemen liegt vor.",
        "Die Symptome bestehen seit mehr als einem Monat und folgen auf ein Ereignis von katastrophalem Ausmass."
    ],
    "F43.2 Anpassungsstörungen": [
        "Nach einer schmerzhaften Trennung ist ein 28-jähriger Mann seit Wochen bedrückt und fühlt sich überfordert.",
        "Der psychische Zustand ist eine Reaktion auf eine einschneidende Lebensveränderung, aber kein schweres Trauma.",
        "Die Symptome erfüllen nicht die Kriterien für eine schwere depressive Episode.",
        "Die Beeinträchtigung beginnt meist innerhalb eines Monats nach dem belastenden Ereignis.",
        "Die Störung dauert in der Regel nicht länger als sechs Monate nach Ende der Belastung an."
    ],
    "F44 Dissoziative Störungen": [
        "Eine 24-jährige Frau kann plötzlich ihre Beine nicht mehr bewegen, obwohl neurologisch alles völlig intakt ist.",
        "Es besteht ein zeitlicher Zusammenhang zwischen psychischer Belastung und dem körperlichen Funktionsausfall.",
        "Dazu gehören auch Phänomene wie dissoziative Amnesie oder dissoziativer Stupor.",
        "Der Patient scheint über die Schwere des Symptoms oft erstaunlich wenig beunruhigt zu sein (Belle Indifférence).",
        "Die Symptome sind nicht bewusst vorgetäuscht, sondern Ausdruck eines unbewussten psychischen Konflikts."
    ],
    "F45 Somatoforme Störungen": [
        "Ein 45-jähriger Patient klagt seit Jahren über wechselnde Schmerzen, ohne dass je eine körperliche Ursache gefunden wurde.",
        "Der Patient ist fest davon überzeugt, schwer krank zu haben, und verlangt ständig neue Untersuchungen.",
        "Häufig stehen Magen-Darm-Beschwerden oder Hautmissempfindungen im Vordergrund.",
        "Psychische Faktoren werden vom Patienten als Ursache meist kategorisch abgelehnt.",
        "Die ständige Beschäftigung mit den Symptomen führt zu einer massiven Beeinträchtigung des sozialen Lebens."
    ],
    "F48 Andere neurotische Störungen": [
        "Ein 40-jähriger Angestellter fühlt sich nach geringster geistiger Anstrengung völlig erschöpft und klagt über Konzentrationsschwäche.",
        "Es bestehen häufig begleitende Symptome wie Spannungskopfschmerz und Schwindelgefühle.",
        "Die Kriterien für eine Depression oder Angststörung werden nicht voll erfüllt.",
        "Im Vordergrund steht das Gefühl einer chronischen Erschöpfbarkeit und Schwäche (z.B. Neurasthenie).",
        "Die Diagnose wird oft gestellt, wenn ein Burnout-ähnliches Bild im Rahmen neurotischer Mechanismen auftritt."
    ],
    "F50.0 Anorexia nervosa": [
        "Ein 16-jähriges Mädchen hat massiv an Gewicht verloren und verweigert die Teilnahme an gemeinsamen Mahlzeiten.",
        "Es liegt ein Body-Mass-Index (BMI) von unter 17,5 vor, der aktiv herbeigeführt wurde.",
        "Die Angst vor einer Gewichtszunahme ist so gross, dass sie das gesamte Denken und Handeln beherrscht.",
        "Bei Frauen tritt häufig eine Amenorrhö (Ausbleiben der Regelblutung) als endokrine Folge auf.",
        "Es besteht eine ausgeprägte Körperschemastörung, bei der die Realität des eigenen Körpers verleugnet wird."
    ],
    "F50.2 Bulimia nervosa": [
        "Eine 22-jährige Frau leidet unter Essattacken, bei denen sie grosse Mengen Nahrung zu sich nimmt und danach Erbrechen erzwingt.",
        "Im Gegensatz zur Anorexie sind diese Patientinnen meist normalgewichtig.",
        "Um eine Gewichtszunahme zu verhindern, werden oft auch Abführmittel oder Fastenphasen eingesetzt.",
        "Die gedankliche Beschäftigung mit Essen und dem Körpergewicht ist zwanghaft gesteigert.",
        "Die Essanfälle treten über mindestens drei Monate hinweg etwa zweimal pro Woche auf."
    ],
    "F51 Nichtorganische Schlafstörungen": [
        "Ein 45-jähriger Mann klagt seit Monaten über Schwierigkeiten beim Einschlafen und fühlt sich tagsüber extrem müde.",
        "Es wurde keine körperliche Ursache wie Schlafapnoe oder Restless-Legs-Syndrom gefunden.",
        "Die Schlafstörung ist entweder das Hauptsymptom oder ein wesentlicher Teil einer psychischen Belastung.",
        "Dazu zählen auch Albträume, Pavor nocturnus (Nachtangst) oder Schlafwandeln.",
        "Die Dauer und Qualität des Schlafes werden vom Betroffenen als absolut ungenügend empfunden."
    ],
    "F52 Sexuelle Funktionsstörungen, nicht verursacht durch eine organische Störung": [
        "Ein 35-jähriges Paar berichtet über einen vollständigen Verlust des sexuellen Verlangens seit über einem Jahr.",
        "Dazu gehören Probleme wie Erektionsstörungen, Vaginismus oder vorzeitiger Samenerguss auf psychischer Basis.",
        "Häufig spielen Versagensängste, Partnerschaftskonflikte oder traumatische Vorerfahrungen eine Rolle.",
        "Die Störung tritt oft situationsabhängig auf, was gegen eine rein organische Ursache spricht.",
        "Der Leidensdruck der Betroffenen oder der Partnerschaft ist das entscheidende Kriterium für die Diagnose."
    ],
    "F53 Psychische Störungen im Wochenbett": [
        "Eine 30-jährige Mutter fühlt sich zwei Wochen nach der Geburt extrem überfordert und weint viel.",
        "Es handelt sich nicht um den normalen 'Babyblues', da die Symptome länger anhalten und schwerwiegender sind.",
        "Die Störung beginnt innerhalb von sechs Wochen nach der Entbindung.",
        "Das Bild kann von einer leichten Depression bis hin zur schweren postpartalen Psychose reichen.",
        "Die Diagnose wird verwendet, wenn die Störung spezifisch durch die Umstellung nach der Geburt ausgelöst wurde."
    ],
    "F54 Psychologische Faktoren bei körperlichen Krankheiten": [
        "Ein 50-jähriger Patient mit Asthma leidet unter Stress, der seine Atembeschwerden massiv verschlimmert.",
        "Die psychischen Faktoren haben einen messbaren Einfluss auf den Verlauf der körperlichen Krankheit.",
        "Beispiele sind psychogene Verschlechterungen bei Neurodermitis, Magengeschwüren oder chronischen Schmerzen.",
        "Die körperliche Krankheit ist primär somatisch diagnostiziert, wird aber durch die Psyche negativ beeinflusst.",
        "Die Diagnose dient dazu, die Notwendigkeit einer begleitenden Psychotherapie zu begründen."
    ],
    "F55 Missbrauch von nichtabhängigkeitserzeugenden Substanzen": [
        "Eine 40-jährige Patientin nimmt täglich Abführmittel in grossen Mengen, obwohl keine medizinische Notwendigkeit besteht.",
        "Es handelt sich um Substanzen wie Vitamine oder pflanzliche Präparate, die kein klassisches Suchtpotential haben.",
        "Trotz gesundheitlicher Warnungen durch den Arzt wird der Konsum fortgesetzt.",
        "Der Patient entwickelt oft eine psychische Abhängigkeit von der Wirkung oder der Einnahmehandlung.",
        "Es treten häufig körperliche Folgeschäden durch den jahrelangen unkontrollierten Gebrauch auf."
    ],
    "F60.0 Paranoide Persönlichkeitsstörung": [
        "Ein 40-jähriger Mann ist überzeugt, dass seine Kollegen ihn hintergehen wollen. Er reagiert auf kleinste Kritik aggressiv.",
        "Es liegt kein akuter Wahn vor, sondern ein zeitstabiles Muster von Misstrauen gegenüber anderen.",
        "Neutrale Handlungen anderer werden häufig als feindselig oder herabsetzend missgedeutet.",
        "Die Person hat grosse Schwierigkeiten, enge Vertrauensbeziehungen aufzubauen.",
        "Das Verhalten führt zu ständigen Konflikten in Beruf und Privatleben durch unbegründetes Misstrauen."
    ],
    "F60.1 Schizoide Persönlichkeitsstörung": [
        "Ein 35-jähriger Einzelgänger zeigt keinerlei Interesse an sozialen Beziehungen oder emotionaler Nähe.",
        "Die Person wirkt auf andere kühl, distanziert und emotional flach.",
        "Lob oder Kritik von anderen scheinen keinerlei Wirkung auf den Betroffenen zu haben.",
        "Es besteht kein Mangel an sozialen Fähigkeiten aus Angst, sondern ein echtes Desinteresse an Gesellschaft.",
        "Die Betroffenen leben oft in ihrer eigenen Fantasiewelt, ohne den Kontakt zur Realität zu verlieren."
    ],
    "F60.2 Dissoziale Persönlichkeitsstörung": [
        "Ein 25-jähriger Mann fällt durch wiederholte Gesetzesverstösse und einen völligen Mangel an Reue auf.",
        "Schon in der Kindheit gab es Berichte über Aggressivität und das Schwänzen der Schule.",
        "Es besteht eine geringe Frustrationstoleranz und eine hohe Neigung, andere für die eigenen Zwecke zu manipulieren.",
        "Soziale Normen und Verpflichtungen werden dauerhaft ignoriert, ohne dass aus Konsequenzen gelernt wird.",
        "Die Diagnose erfordert, dass das Verhalten als stabiles Persönlichkeitsmerkmal auftritt."
    ],
    "F60.3 Borderline-Persönlichkeitsstörung": [
        "Eine 22-jährige Frau erlebt extreme Stimmungsschwankungen und neigt zu Selbstverletzungen.",
        "Es besteht ein chronisches Gefühl von innerer Leere und eine starke Unsicherheit bezüglich der eigenen Identität.",
        "Impulsive Handlungen dienen oft dem Abbau innerer Anspannung.",
        "Die Angst vor dem Alleinsein führt zu verzweifelten Bemühungen, Trennungen zu verhindern.",
        "In Krisensituationen können vorübergehende paranoide Vorstellungen oder schwere dissoziative Symptome auftreten."
    ],
    "F60.4 Histrionische Persönlichkeitsstörung": [
        "Eine 30-jährige Patientin steht gern im Mittelpunkt und setzt dafür ein sehr theatralisches Verhalten ein.",
        "Die äussere Erscheinung wird oft verführerisch eingesetzt, um Aufmerksamkeit zu erregen.",
        "Die Gefühle wirken auf andere oberflächlich und wechseln sehr schnell.",
        "Die betroffene Person ist leicht durch andere oder durch aktuelle Trends beeinflussbar.",
        "Beziehungen werden oft als viel intimer dargestellt, als sie in der Realität tatsächlich sind."
    ],
    "F60.5 Anankastische Persönlichkeitsstörung": [
        "Eine 40-jährige Frau ist extrem perfektionistisch und verliert sich so sehr in Details, dass sie Aufgaben nicht fertigstellt.",
        "Sie wirkt starr, eigensinnig und stellt übertrieben hohe Ansprüche an sich selbst und andere.",
        "Freizeitaktivitäten und Freundschaften werden zugunsten von Arbeit und Produktivität vernachlässigt.",
        "Es besteht eine übermässige Gewissenhaftigkeit und Sorge um Regeln und Ordnung.",
        "Im Gegensatz zur Zwangsstörung fehlen hier meist die sich aufdrängenden Zwangshandlungen."
    ],
    "F60.6 Ängstlich-vermeidende Persönlichkeitsstörung": [
        "Eine 35-jährige Person meidet soziale Kontakte aus Angst vor Ablehnung. Sie hält sich selbst für minderwertig.",
        "Es besteht eine ständige Sorge, in sozialen Situationen lächerlich gemacht zu werden.",
        "Enge Bindungen werden nur eingegangen, wenn die absolute Sicherheit besteht, gemocht zu werden.",
        "Der Betroffene leidet unter einem starken Gefühl der sozialen Unbeholfenheit.",
        "Die Lebensführung ist durch eine massive Vermeidung von Risiken geprägt."
    ],
    "F60.7 Abhängige (asthenische) Persönlichkeitsstörung": [
        "Ein 28-jähriger Mann kann keine alltäglichen Entscheidungen treffen, ohne vorher massenhaft Rat und Bestätigung von seiner Mutter einzuholen.",
        "Es besteht eine grosse Angst davor, verlassen zu werden und auf sich allein gestellt zu sein.",
        "Die Person übernimmt kaum Verantwortung für ihr eigenes Leben und lässt andere wichtige Entscheidungen für sich treffen.",
        "Nach dem Ende einer engen Beziehung wird sofort verzweifelt nach einer neuen Stütze gesucht.",
        "Widerspruch gegenüber anderen wird konsequent vermieden, um die notwendige Unterstützung nicht zu gefährden."
    ],
    "F61 Kombinierte und andere Persönlichkeitsstörungen": [
        "Ein 34-jähriger Patient zeigt deutliche Merkmale verschiedener Muster, wie zum Beispiel Anteile von Borderline und paranoider Struktur.",
        "Keines der Bilder dominiert jedoch so stark, dass es allein für eine spezifische Diagnose aus F60 ausreichen würde.",
        "Es handelt sich um Mischbilder, die oft besonders schwierig in der Therapie zu handhaben sind.",
        "Das Verhalten ist über lange Zeit stabil und beeinträchtigt mehrere Funktionsbereiche des Lebens massiv.",
        "Diese Diagnose wird häufig gestellt, wenn die Persönlichkeitspathologie sehr komplex und vielschichtig ist."
    ],
    "F62 Andauernde Persönlichkeitsänderungen, nicht Folge einer Gehirnschädigung": [
        "Ein früher lebensfroher 45-jähriger Mann hat sich nach zweijähriger Gefangenschaft und Folter völlig verändert.",
        "Er ist nun dauerhaft misstrauisch, feindselig und lebt in einer sozialen Isolation.",
        "Die Änderung der Persönlichkeit trat erst im Erwachsenenalter nach einer extremen, katastrophalen Belastung auf.",
        "Es handelt sich nicht um eine PTBS, da die Wesensänderung dauerhaft, starr und tiefgreifend ist.",
        "Dazu zählt auch die Persönlichkeitsänderung nach einer langjährigen, schweren psychiatrischen Erkrankung."
    ],
    "F63 Störungen der Impulskontrolle": [
        "Ein 30-jähriger Patient berichtet von einem unkontrollierbaren Drang, sein gesamtes Gehalt zu verspielen.",
        "Zu dieser Gruppe gehören auch Kleptomanie (Stehlen), Pyromanie (Feuerlegen) und Trichotillomanie.",
        "Vor der Handlung steigt die innere Spannung massiv an, die nach der Tat einer kurzen Erleichterung weicht.",
        "Die Handlungen sind nicht durch materielle Gier oder Rache motiviert, sondern durch den Impuls selbst.",
        "Trotz wiederholter negativer Konsequenzen gelingt es dem Betroffenen nicht, das Verhalten zu unterlassen."
    ],
    "F64 Störungen der Geschlechtsidentität": [
        "Eine 22-jährige Person fühlt sich seit ihrer Kindheit im falschen Körper geboren und leidet unter den biologischen Merkmalen.",
        "Es besteht ein dauerhaftes Unbehagen über das eigene Geschlecht und die damit verbundenen sozialen Rollen.",
        "Oft wird eine hormonelle oder operative Angleichung an das gewünschte Geschlecht angestrebt.",
        "Es handelt sich nicht um eine vorübergehende Phase, sondern um eine stabile, tief verwurzelte Identität.",
        "Die Diagnose umfasst unter anderem den Transsexualismus und die Geschlechtsidentitätsstörung des Kindesalters."
    ],
    "F65 Störungen der Sexualpräferenz": [
        "Ein 40-jähriger Mann berichtet, dass er sexuelle Erregung nur empfinden kann, wenn er bestimmte leblose Gegenstände wie Schuhe einbezieht.",
        "Dazu zählen Paraphilien wie Fetischismus, Exhibitionismus, Voyeurismus oder Pädophilie.",
        "Die Präferenz muss über mindestens sechs Monate bestehen und die soziale Integration oder Funktionsfähigkeit stören.",
        "Oft leiden die Betroffenen unter ihrem Drang oder geraten mit dem Gesetz in Konflikt.",
        "Andere psychische Störungen wie Schizophrenie müssen als primäre Ursache für das Verhalten ausgeschlossen sein."
    ],
    "F66 Psychische Störungen im Zusammenhang mit der sexuellen Entwicklung": [
        "Ein 19-jähriger Jugendlicher leidet unter massiven Ängsten und Depressionen, weil er sich bezüglich seiner sexuellen Identität unsicher ist.",
        "Die sexuelle Orientierung an sich ist hier nicht die Störung, sondern der damit verbundene Leidensdruck.",
        "Oft besteht der Wunsch, die eigene sexuelle Ausrichtung zu ändern, um besser in das soziale Umfeld zu passen.",
        "Die Diagnose hilft dabei, professionelle Unterstützung bei Identitätskrisen und Coming-out-Problemen zu rechtfertigen.",
        "Es geht primär um die psychische Verarbeitung der sexuellen Entwicklung und nicht um die Vorliebe an sich."
    ],
    "F70 Leichte Intelligenzminderung": [
        "Ein 15-jähriger Schüler hat grosse Schwierigkeiten, dem Unterricht zu folgen, ist im Alltag aber weitgehend selbstständig.",
        "Der Intelligenzquotient (IQ) liegt in einem Bereich zwischen 50 und 69 Punkten.",
        "Spracherwerb und soziale Integration verlaufen verzögert, erreichen aber ein Niveau für einfache Tätigkeiten.",
        "Die betroffene Person kann oft lesen und schreiben, benötigt aber Unterstützung bei komplexen Aufgaben.",
        "Es handelt sich um das klassische Bild der 'Lernbehinderung' im klinischen Sinne."
    ],
    "F71 Mittelgradige Intelligenzminderung": [
        "Ein 25-jähriger Erwachsener kann einfache Gespräche führen, benötigt aber im Alltag bei der Körperpflege ständige Anleitung.",
        "Der Intelligenzquotient (IQ) bewegt sich in einem Bereich von 35 bis 49 Punkten.",
        "Die motorische Entwicklung und die Sprache sind deutlich eingeschränkt und im Vergleich zu Gleichaltrigen stark verzögert.",
        "Eine unabhängige Lebensführung ist meist nicht möglich, aber einfache Haushaltstätigkeiten können erlernt werden.",
        "Häufig liegen zusätzliche neurologische oder körperliche Beeinträchtigungen als Begleitsymptome vor."
    ],
    "F72 Schwere Intelligenzminderung": [
        "Ein 20-jähriger Patient verfügt nur über einen sehr begrenzten Wortschatz und kann Wünsche oft nur durch Gesten äussern.",
        "Der Intelligenzquotient liegt in einem Bereich zwischen 20 und 34 Punkten.",
        "Die psychomotorische Entwicklung ist massiv beeinträchtigt und oft liegen erhebliche neurologische Schäden vor.",
        "Eine schulische Förderung ist nur in Form von Basispädagogik und lebenspraktischen Übungen möglich.",
        "Die Betroffenen benötigen lebenslange, intensive Betreuung und Aufsicht in allen Lebensbereichen."
    ],
    "F73 Schwerste Intelligenzminderung": [
        "Ein 12-jähriger Patient zeigt kaum Reaktionen auf seine Umwelt und ist in seiner Bewegungsfähigkeit extrem eingeschränkt.",
        "Der Intelligenzquotient liegt unter 20 Punkten und eine verbale Kommunikation ist nicht vorhanden.",
        "Es besteht eine vollständige Abhängigkeit von Pflegekräften für alle biologischen Grundbedürfnisse.",
        "Häufig treten schwere Krampfanfälle und Sinnesbehinderungen als dauerhafte Begleitsymptome auf.",
        "Die Diagnose wird meist bereits im frühen Säuglingsalter aufgrund der massiven Entwicklungsrückstände gestellt."
    ],
    "F74 Dissoziative Störungen der Intelligenz": [
        "Ein 10-jähriges Kind, das zuvor normal entwickelt war, verliert nach einem traumatischen Ereignis plötzlich scheinbar seine kognitiven Fähigkeiten.",
        "Es handelt sich nicht um einen biologischen Hirnabbau, sondern um einen massiven psychischen Schutzmechanismus.",
        "Die gezeigten Leistungen schwanken stark je nach emotionalem Zustand und Sicherheitsgefühl.",
        "Bei Entlastung der psychischen Situation können die ursprünglichen intellektuellen Fähigkeiten wieder zum Vorschein kommen.",
        "Diese Diagnose ist sehr selten und erfordert einen strikten Ausschluss organischer Hirnschäden."
    ],
    "F78 Andere Intelligenzminderung": [
        "Bei einem 18-jährigen Patienten besteht eine deutliche geistige Einschränkung, die aber durch zusätzliche Blindheit und Taubheit schwer messbar ist.",
        "Die klinische Einschätzung bestätigt die Minderung, aber Standard-IQ-Tests können nicht zuverlässig durchgeführt werden.",
        "Die Diagnose wird vergeben, wenn die üblichen Testverfahren aufgrund körperlicher oder sensorischer Behinderungen nicht anwendbar sind.",
        "Die Schwere der Minderung lässt sich dadurch nicht exakt in die Kategorien F70-F73 einordnen.",
        "Dennoch ist eine spezifische Förderung und intensive Betreuung aufgrund der Defizite zwingend erforderlich."
    ],
    "F80 Umschriebene Entwicklungsstörungen des Sprechens": [
        "Ein 4-jähriger Junge spricht deutlich weniger Worte als seine Gleichaltrigen. Sein Hörvermögen ist jedoch völlig normal.",
        "Es handelt sich nicht um eine Folge von Vernachlässigung oder einer neurologischen Erkrankung.",
        "Die Störung betrifft entweder das Sprachverständnis oder die Artikulation von Lauten.",
        "Die Defizite sind nicht durch eine Intelligenzminderung erklärbar.",
        "Frühzeitige Logopädie ist die wichtigste therapeutische Massnahme bei dieser Diagnose."
    ],
    "F81 Entwicklungsstörungen schulischer Fertigkeiten": [
        "Ein intelligentes 8-jähriges Mädchen hat extreme Schwierigkeiten, einfache Wörter flüssig zu lesen oder fehlerfrei zu schreiben.",
        "Es liegt keine Seh- oder Hörstörung vor, die die Probleme beim Lernen erklären könnte.",
        "Die Leistungen liegen deutlich unter dem Niveau, das aufgrund des IQs zu erwarten wäre.",
        "Die Schwierigkeiten bestehen von Beginn der Schulzeit an (z.B. Lese-Rechtschreibstörung).",
        "Oft führen diese Teilleistungsstörungen zu Sekundärsymptomen wie Schulangst."
    ],
    "F82 Umschriebene Entwicklungsstörung der motorischen Funktionen": [
        "Ein 7-jähriges Kind wirkt auffallend ungeschickt, stolpert oft und hat grosse Probleme beim Zubinden von Schuhen.",
        "Eine neurologische Krankheit wie eine Zerebralparese wurde als Ursache für die Tollpatschigkeit ausgeschlossen.",
        "Die motorischen Leistungen liegen signifikant unter dem Durchschnitt des Alters und der Intelligenz.",
        "Häufig besteht eine Kombination aus grobmotorischen Schwierigkeiten und feinmotorischen Defiziten beim Malen oder Schreiben.",
        "Das klinische Bild wird im Alltag oft auch als 'Umschriebene Entwicklungsstörung der Koordination' bezeichnet."
    ],
    "F83 Kombinierte umschriebene Entwicklungsstörungen": [
        "Bei einem 6-jährigen Kind liegen gleichzeitig Verzögerungen in der Sprache, der Motorik und beim Lernen vor.",
        "Keine dieser Störungen dominiert das Bild so stark, dass sie als alleinige Hauptdiagnose ausreicht.",
        "Die Kriterien für mehrere Einzeldiagnosen aus dem Bereich F80-F82 sind jeweils teilweise erfüllt.",
        "Die allgemeine Intelligenz liegt dennoch in einem Bereich, der keine generelle Intelligenzminderung rechtfertigt.",
        "Die Therapie muss multiprofessionell erfolgen, um die Defizite in allen betroffenen Bereichen gleichzeitig anzugehen."
    ],
    "F84.0 Frühkindlicher Autismus": [
        "Ein 3-jähriges Kind nimmt kaum Blickkontakt auf und spielt stundenlang nur damit, Räder an einem Auto zu drehen.",
        "Die Störung manifestiert sich bereits vor dem dritten Lebensjahr.",
        "Es besteht eine qualitative Beeinträchtigung der sozialen Interaktion und Kommunikation.",
        "Stereotype Verhaltensmuster und begrenzte Interessen bestimmen den Alltag des Kindes.",
        "In vielen Fällen ist dieses Krankheitsbild mit einer Intelligenzminderung kombiniert."
    ],
    "F84.1 Atypischer Autismus": [
        "Ein 5-jähriges Kind zeigt autistische Verhaltensweisen, aber die Symptome traten erst nach dem dritten Lebensjahr deutlich hervor.",
        "Alternativ kann die Diagnose gestellt werden, wenn nicht alle drei Kernbereiche der autistischen Triade voll ausgeprägt sind.",
        "Oft tritt diese Form bei Kindern mit einer sehr schweren Intelligenzminderung auf, bei denen die Symptome schwer abgrenzbar sind.",
        "Es besteht dennoch eine deutliche Störung der sozialen Kommunikation und der zwischenmenschlichen Interaktion.",
        "Die Diagnose wird gewählt, wenn das klinische Bild autistisch wirkt, aber von der klassischen Norm des frühkindlichen Autismus abweicht."
    ],
    "F84.2 Rett-Syndrom": [
        "Ein 4-jähriges Mädchen entwickelte sich im ersten Lebensjahr normal, verliert dann aber plötzlich bereits erlernte Handfunktionen.",
        "Charakteristisch sind waschende, stereotype Handbewegungen und ein Stillstand des Kopfwaachstums.",
        "Die Störung wurde bisher fast ausschliesslich bei weiblichen Patienten beobachtet.",
        "Es handelt sich um eine schwere neurologische Entwicklungsstörung mit fortschreitendem Verlust motorischer und sprachlicher Fähigkeiten.",
        "Die Symptome beginnen meist zwischen dem 7. und 24. Lebensmonat nach einer Phase scheinbar normaler Entwicklung."
    ],
    "F84.5 Asperger-Syndrom": [
        "Ein 9-jähriger Junge spricht wie ein kleiner Professor, versteht aber keine Witze oder nonverbale Signale.",
        "Im Gegensatz zum frühkindlichen Autismus gibt es hier keine allgemeine Sprachverzögerung.",
        "Die soziale Interaktion ist durch mangelndes Einfühlungsvermögen massiv erschwert.",
        "Die Betroffenen halten starr an Routinen fest und zeigen oft motorische Ungeschicklichkeit.",
        "Die Diagnose wird oft erst im Schulalter gestellt, wenn die sozialen Anforderungen steigen."
    ],
    "F90 Hyperkinetische Störungen (ADHS)": [
        "Ein 8-jähriger Junge kann im Unterricht nicht stillsitzen und lässt sich von jedem Geräusch ablenken.",
        "Die Symptome der Unaufmerksamkeit und Hyperaktivität zeigen sich in mindestens zwei Lebensbereichen.",
        "Die Beschwerden müssen bereits vor dem siebten Lebensjahr begonnen haben.",
        "Es liegt keine andere psychische Störung wie eine Depression vor, die das Verhalten erklärt.",
        "Die betroffenen Kinder haben oft grosse Schwierigkeiten, ihre Impulse zu kontrollieren."
    ],
    "F91 Störungen des Sozialverhaltens": [
        "Ein 14-jähriger Jugendlicher zeigt wiederholt aggressives Verhalten, stiehlt und quält absichtlich Tiere.",
        "Es handelt sich um ein dauerhaftes Muster von unsozialem, aggressivem oder aufsässigem Verhalten.",
        "Die Handlungen verletzen grob die grundlegenden Rechte anderer oder soziale Normen.",
        "Die Symptomatik besteht seit mindestens sechs Monaten.",
        "Wird die Diagnose im Kontext von Depressionen gestellt, gibt es eine eigene kombinierte Kategorie."
    ],
    "F92 Kombinierte Störung des Sozialverhaltens und der Emotionen": [
        "Ein 12-jähriger Junge fällt durch aggressives, aufsässiges Verhalten auf, zeigt aber gleichzeitig Anzeichen einer starken Depression.",
        "Die Kriterien für eine Störung des Sozialverhaltens und für eine emotionale Störung (Angst/Depression) sind beide gleichzeitig erfüllt.",
        "Das unsoziale Verhalten scheint oft eine direkte Reaktion auf eine tiefe, innere emotionale Not zu sein.",
        "Die Behandlung muss sowohl die Verhaltensauffälligkeiten als auch die zugrunde liegende emotionale Instabilität adressieren.",
        "Häufig leiden diese Kinder unter erheblichen Spannungen im familiären Umfeld oder unter Traumatisierungen."
    ],
    "F93 Emotionale Störungen des Kindesalters": [
        "Ein 7-jähriges Mädchen weigert sich panisch, in die Schule zu gehen, aus Angst, ihrer Mutter könne in der Zeit etwas zustossen.",
        "Es handelt sich um eine altersuntypische, massive Steigerung normaler kindlicher Ängste, wie zum Beispiel Trennungsangst.",
        "Dazu gehören auch soziale Ängstlichkeit gegenüber Fremden oder spezifische phobische Störungen des Kindesalters.",
        "Die Angst bezieht sich auf spezifisch kindliche Entwicklungsthemen und ist nicht so generalisiert wie bei Erwachsenen.",
        "Die Störung behindert die normale soziale Entwicklung und muss meist vor dem sechsten Lebensjahr begonnen haben."
    ],
    "F94 Störungen sozialer Funktionen mit Beginn in der Kindheit": [
        "Ein 5-jähriges Kind spricht zu Hause fliessend, verharrt aber im Kindergarten in absolutem, beharrlichem Schweigen.",
        "Dazu gehört auch die reaktive Bindungsstörung infolge von schwerer Vernachlässigung, Misshandlung oder häufigem Wechsel der Bezugspersonen.",
        "Die Störung zeigt sich primär in der Art und Weise, wie das Kind soziale Beziehungen zu Erwachsenen oder Gleichaltrigen gestaltet.",
        "Andere Ursachen wie Autismus oder eine reine Intelligenzminderung müssen sicher ausgeschlossen sein.",
        "Die Beeinträchtigungen treten in frühen Entwicklungsphasen auf und sind oft eine direkte Reaktion auf ein belastendes Umfeld."
    ],
    "F95 Ticstörungen": [
        "Ein 10-jähriger Junge zeigt unwillkürliches Augenzwinkern und stösst regelmässig Bellgeräusche aus.",
        "Die Bewegungen oder Lautäusserungen treten plötzlich auf und haben keinen erkennbaren Zweck.",
        "Beim Tourette-Syndrom treten multiple motorische Tics und mindestens ein vokaler Tic kombiniert auf.",
        "Die Symptome verstärken sich oft unter Stress und können kurzzeitig unterdrückt werden.",
        "Die Diagnose wird gestellt, wenn die Tics über einen Zeitraum von mindestens vier Wochen auftreten."
    ],
    "F98 Andere Verhaltens- und emotionale Störungen (Enuresis / Enkopresis)": [
        "Ein 6-jähriges Kind nässt fast jede Nacht das Bett ein, obwohl es zuvor bereits über ein Jahr lang zuverlässig trocken war.",
        "Körperliche Ursachen wie Fehlbildungen der Harnwege wurden vom Kinderarzt sicher ausgeschlossen.",
        "Dazu gehören in dieser Kategorie auch das Einkoten (Enkopresis), Stottern, Poltern oder Fütterstörungen im Kleinkindalter.",
        "Die Verhaltensauffälligkeiten müssen für das jeweilige Entwicklungsalter des Kindes absolut unangemessen sein.",
        "Häufig besteht ein zeitlicher Zusammenhang mit psychischen Belastungen, wie zum Beispiel der Einschulung oder familiären Krisen."
    ]
    "F99 Psychische Störung ohne nähere Angabe": [
        "Ein 40-jähriger Patient zeigt deutliche Anzeichen einer psychischen Erkrankung, aber eine genauere Einordnung ist derzeit nicht möglich.",
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
