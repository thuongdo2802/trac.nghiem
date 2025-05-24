// Dữ liệu cho tất cả các bài đọc và câu hỏi
// Mỗi phần tử trong mảng passagesData là một bài đọc
const passagesData = [
    {
        id: 'passage1',
        passageText: `
            <p>The Communist Party of Vietnam (CPV) exercises the absolute, (1) _______ and all-round leadership over the national defence to safeguard the Homeland. [cite: 2]</p>
            <p>The leadership of the CPV is a (2) _______ factor of the revolutionary, all-people, and comprehensive nature of national defence, (3) _______ victories in the cause of national defence to safeguard the Homeland. [cite: 3]</p>
            <p>It is a must to (4) _______ uphold and protect the leadership of the CPV, and defend the State and people in all circumstances and contexts. [cite: 4]</p>
            <p>The CPV exercises its national defence leadership through its (5) _______ platforms, guidelines, strategies and directions for policies on national defence. [cite: 5]</p>
            <p>This (6) _______ is institutionalized via legal system with relevant legal documents. [cite: 6]</p>
            <p>The CPV’s national defence leadership is (7) _______ through the system of the CPV’s organisations and members. [cite: 7]</p>
            <p>The CPV sets forth and implements leadership mechanisms of national defence, (8) _______ functions and mandates of the Party committees of all levels, from the Central to the grassroots, and exercises the leadership over the Party and political work in the building and operation of the all-people national defence. [cite: 8]</p>
            <p>The CPV exercises the absolute, direct and all-round leadership over the VPA. [cite: 9]</p>
            <p>The CPV’s leadership if the VPA is (9) _______ uniform on the Party Central Committee, and constantly and directly under the Politburo and Secretariat through a system of Party organisations, (10) _______ organisations and political organisations and political cadres at various levels, and public mass organisations in the military grass-roots units. [cite: 10]</p>
        `,
        questions: [
            { qNum: 1, options: { A: "direct", B: "directly", C: "indirect", D: "direction" }, correct: "A" },
            { qNum: 2, options: { A: "decide", B: "decision", C: "decisive", D: "indecisive" }, correct: "C" },
            { qNum: 3, options: { A: "determine", B: "determination", C: "determined", D: "determining" }, correct: "D" },
            { qNum: 4, options: { A: "resolute ", B: "resolutely", C: "resolution ", D: "resolutions" }, correct: "B" },
            { qNum: 5, options: { A: "politics", B: "political", C: "politically", D: "politician" }, correct: "B" },
            { qNum: 6, options: { A: "leadership", B: "lead", C: "leader", D: "leading" }, correct: "A" },
            { qNum: 7, options: { A: "achievement", B: "achieve", C: "achieving ", D: "achieved" }, correct: "D" },
            { qNum: 8, options: { A: "stipulate", B: "stipulation", C: "stipulating", D: "stipulated" }, correct: "C" },
            { qNum: 9, options: { A: "central", B: "centrally", C: "centre", D: "centralize" }, correct: "B" },
            { qNum: 10, options: { A: "commander", B: "commanding", C: "command", D: "commands" }, correct: "B" },
        ]
    },
    {
        id: 'passage2',
        passageText: `
            <p>Commanders, political commissars and junior political commissars are ( 1 ) _______ by the CPV, State and the VPA certain authority and responsibilities within concerned areas and are held accountable before law, the Party committees, ( 2 ) _______, political units, their political commissars, and junior political commissars at higher levels and their Party committees for all the ( 3 ) _______ of their units according to the assigned areas of responsibility and tasks, strictly ( 4 ) _______ their Party committees’ leadership. [cite: 12]</p>
            <p>Commanders are ( 5 ) _______ for complying with seriously implementing the superiors’ orders and instructions, as well as resolutions of their units’ Party committees on all activities of their units. [cite: 13]</p>
            <p>In the ( 6 ) _______ of their tasks, the commanders have to report to their Party committees on the tasks assigned and propose the guidelines and measures of leadership for the Party committee to discuss and ( 7 ) _______ decisions. [cite: 14]</p>
            <p>When an emergency situation arises, the commanders determine and make ( 8 ) _______ decisions to fulfil the task, and then report and stand accountable before their superiors and Party committees. [cite: 15]</p>
            <p>The ( 9 ) _______ between political commissars (junior political commissars) and commanders are relationships of work coordination. [cite: 16]</p>
            <p>Political commissars (junior political commissars) and commanders must proactively and closely work together in the spirit of solidarity, unity, reliability, respect, and mutual assistance for task ( 10 ) _______. [cite: 17]</p>
        `,
        questions: [
            { qNum: 1, options: { A: "assign", B: "assigned", C: "assignment", D: "assigning" }, correct: "B" },
            { qNum: 2, options: { A: "command", B: "commanding", C: "commands", D: "commanders" }, correct: "D" },
            { qNum: 3, options: { A: "activities", B: "action", C: "act", D: "active" }, correct: "A" },
            { qNum: 4, options: { A: "obey ", B: "obeying", C: "obeys", D: "obeyed" }, correct: "B" },
            { qNum: 5, options: { A: "responsibility", B: "respond", C: "responsible", D: "responding" }, correct: "C" },
            { qNum: 6, options: { A: "implementation", B: "implement", C: "implemented", D: "implementing" }, correct: "A" },
            { qNum: 7, options: { A: "take", B: "do", C: "make", D: "get" }, correct: "C" },
            { qNum: 8, options: { A: "time", B: "timing", C: "timely", D: "times" }, correct: "C" },
            { qNum: 9, options: { A: "relationship", B: "relation", C: "relative", D: "relate" }, correct: "A" },
            { qNum: 10, options: { A: "accomplish", B: "accomplishing", C: "accomplished", D: "accomplishment" }, correct: "D" },
        ]
    },
    {
        id: 'passage3',
        passageText: `
            <p>The Ministry of National Defence is the ( 1 ) _______ organ for the Party and State to consult on matters of national defence and military guidelines and duties ( 2 ) _______ safeguarding the Homeland, stands accountable before the Government on national defence state ( 3 ) _______, organizes the implementation of building, management and command of the Vietnam People’s Army, the Militia and Self-Defence Force, and administers public services as ( 4 ) _______ by law. [cite: 19]</p>
            <p>The Minister of National Defence is the ( 5 ) _______ commander of the Vietnam People’s Army and the Militia and Self-Defence Force, a Member of the National Defence and Security Council, Deputy Secretary of the Central Military Commission and Member of the government in ( 6 ) _______ of directing the execution of the State management functions on national defence and military affairs as ( 7 ) _______ by law and presides over the planning and organizes the implementation of the National Defence Strategy. [cite: 20]</p>
            <p>( 8 ) _______ the Minister of National Defence are Deputy Ministers of National Defence, the General Staff, the General Political Department, four general departments, Hanoi Capital High Command and seven military regions, two services (Navy and Air Defence – Air Force), Border ( 9 ) _______ High Command, six arms, four army corps, Vietnam Coast Guard Command, Cyber Command and the Ministry of National Defence ( 10 ) _______ units. [cite: 21]</p>
        `,
        questions: [
            { qNum: 1, options: { A: "advice", B: "advising", C: "advisory", D: "advised" }, correct: "C" },
            { qNum: 2, options: { A: "in", B: "of", C: "at", D: "about" }, correct: "B" },
            { qNum: 3, options: { A: "managing", B: "management", C: "manage", D: "managed" }, correct: "B" },
            { qNum: 4, options: { A: "stipulate", B: "stipulation", C: "stipulating", D: "stipulated" }, correct: "D" },
            { qNum: 5, options: { A: "high", B: "higher", C: "highest", D: "height" }, correct: "C" },
            { qNum: 6, options: { A: "order", B: "charge", C: "work", D: "respond" }, correct: "B" },
            { qNum: 7, options: { A: "defined", B: "definite", C: "defining", D: "definition" }, correct: "A" },
            { qNum: 8, options: { A: "Assisted", B: "Assist", C: "Assistant", D: "Assisting" }, correct: "A" },
            { qNum: 9, options: { A: "Guarding", B: "Guard", C: "Guarded", D: "Guarded" }, correct: "B" },
            { qNum: 10, options: { A: "affiliated", B: "affiliate", C: "affiliating", D: "affiliations" }, correct: "A" },
        ]
    },
    {
        id: 'passage4',
        passageText: `
            <p>The Communist Party of Vietnam and President Ho Chi Minh defined that the VPA is a ( 1 ) _______ army, and ‘an army ready for combat, and army ready for work and an army ready for ( 2 ) _______’. [cite: 23]</p>
            <p>The fundamental functions of the VPA have been affirmed and ( 3 ) _______ over the past 75 years. [cite: 24]</p>
            <p>Functioning as ‘an army ready for combat’, the VPA has been built in the ( 4 ) _______ of a revolutionary, regular, highly-skilled, gradually modernized army, with some force ( 5 ) _______ straight to modernity. [cite: 25]</p>
            <p>It is an army strong in politics, ideology, ( 6 ) _______, and absolutely loyal to the CPV, Homeland and people. [cite: 26]</p>
            <p>The VPA is to be built into an adept, compact, strong, mobile, highly flexible and efficient army ( 7 ) _______ with modern weaponry. [cite: 27]</p>
            <p>The VPA is to promote research and development of the Vietnamese military art and regularly conduct training exercises to improve comprehensive quality, combat strength and combat ( 8 ) _______. [cite: 28]</p>
            <p>The VPA plays a core role in building the all-people national defence, ( 9 ) _______ deals with defence situations, and is always ready to defeat all types of aggressive war, and to firmly defend independence, sovereignty and territorial integrity of the Homeland, contributing to maintaining a peaceful and stable environment for the ( 10 ) _______ and development of the country. [cite: 29]</p>
        `,
        questions: [
            { qNum: 1, options: { A: "revolution", B: "revolutionary", C: "revolutions", D: "revolting" }, correct: "B" },
            { qNum: 2, options: { A: "produce", B: "product", C: "produced", D: "production" }, correct: "D" },
            { qNum: 3, options: { A: "promote", B: "promoted", C: "promoting", D: "promotion" }, correct: "B" },
            { qNum: 4, options: { A: "direction", B: "direct", C: "director", D: "directing" }, correct: "A" },
            { qNum: 5, options: { A: "advance", B: "advanced", C: "advancing", D: "advancement" }, correct: "B" },
            { qNum: 6, options: { A: "organization", B: "organize", C: "organizing", D: "organ" }, correct: "A" },
            { qNum: 7, options: { A: "equip", B: "equipment", C: "equipped", D: "equips" }, correct: "C" },
            { qNum: 8, options: { A: "already", B: "readily", C: "ready", D: "readiness" }, correct: "D" },
            { qNum: 9, options: { A: "success", B: "successfully", C: "succeed", D: "successful" }, correct: "B" },
            { qNum: 10, options: { A: "built", B: "build", C: "building", D: "buildings" }, correct: "D" }, // Note: assuming "building" from context
        ]
    },
    {
        id: 'passage5',
        passageText: `
            <p>( 1 ) _______ on 7 May 1955, the Vietnam People’s Navy is the core service in protecting sovereignty, sovereign rights, ( 2 ) _______ unity and integrity of Vietnam’s seas and islands and building the national defence posture at sea. [cite: 31]</p>
            <p>The Navy has ( 3 ) _______ to manage and firmly defend the sea waters and islands under Vietnam’s sovereignty, ready for combating independently or participating ( 4 ) _______ combined operations to defeat any aggression at sea. [cite: 32]</p>
            <p>It is also responsible ( 5 ) _______ maintaining security, countering any acts of violating sovereignty, sovereign rights, jurisdiction and national interests of Vietnam at sea, and participating in disaster ( 6 ) _______ and relief, and search and rescue, securing economic production and other normal activities in Vietnam’s sea waters and islands in conformity with Vietnamese and international laws. [cite: 33]</p>
            <p>The Navy is organized ( 7 ) _______ Service Command and subordinate units. [cite: 34]</p>
            <p>The Service Command has the Commander and Political Commissar, Deputy Commanders and Deputy Political Commissars. [cite: 35]</p>
            <p>It also consists ( 8 ) _______ functional agencies responsible for staff, political work, logistical and technical affairs. [cite: 36]</p>
            <p>The Navy affiliated units comprises five naval region commands (1, 2, 3, 4, and 5), naval brigades, academy and schools, ( 9 ) _______ research institute and economic-defence units. [cite: 37]</p>
            <p>Each naval region is organized into the naval region command and affiliated units such as naval centres, brigades and other ( 10 ) _______ and service units. [cite: 38]</p>
        `,
        questions: [
            { qNum: 1, options: { A: "Establishment", B: "Establishing", C: "Establish", D: "Established" }, correct: "D" },
            { qNum: 2, options: { A: "territorial", B: "territory", C: "territorially", D: "territories" }, correct: "A" },
            { qNum: 3, options: { A: "responding", B: "response", C: "responsibility", D: "responsible" }, correct: "D" },
            { qNum: 4, options: { A: "on", B: "in", C: "at", D: "of" }, correct: "B" },
            { qNum: 5, options: { A: "for", B: "in", C: "on ", D: "about" }, correct: "A" },
            { qNum: 6, options: { A: "prevent", B: "preventing", C: "prevented", D: "prevention" }, correct: "D" },
            { qNum: 7, options: { A: "in", B: "into", C: "of", D: "to" }, correct: "B" },
            { qNum: 8, options: { A: "of", B: "in", C: "on", D: "about" }, correct: "A" },
            { qNum: 9, options: { A: "technique", B: "techno", C: "technical", D: "techniques " }, correct: "C" },
            { qNum: 10, options: { A: "supports", B: "supporting", C: "supported", D: "support" }, correct: "D" },
        ]
    },
    {
        id: 'passage6',
        passageText: `
            <p>( 1 ) _______ as ‘an army for work’, the VPA has always maintained its close ties with the people. [cite: 40]</p>
            <p>Being one of the core forces participating in ( 2 ) _______ mobilization and grassroots political system construction, the VPA’s units are to continue actively conduct mass-related work, take the lead ( 3 ) _______ socio-economic development in remote and secluded areas, borders, seas and islands, actively take part in disaster preparedness and response, search and rescue, and contribute ( 4 ) _______ protection of the environment. [cite: 41]</p>
            <p>The VPA units continue to closely coordinate with local authorities, and actively participate in hunger elimination and poverty ( 5 ) _______, contributing to the improvement of the people’s material and spiritual life. [cite: 42]</p>
            <p>The work of international defence relations has gained a number of important achievements, contributing to maintaining a peaceful and stable environment for national construction and development, and increasing the position and reputation ( 6 ) _______ the country and the VPA in the international arena, such as participating in UN peacekeeping operations, joint training exercises of Humanitarian Assistance and Disaster Relief (HADR), Search and Rescue (SAR), and international cooperation in ( 7 ) _______ the legacy of war and so forth. [cite: 43]</p>
            <p>Functioning as ‘an army ready ( 8 ) _______ production’, VPA’s economic-defence units have always maintained a steady growth rate, ( 9 ) _______ jobs for hundreds of thousands of people. [cite: 44]</p>
            <p>They also have fulfilled financial duties to the State budget and produced dual-use and high-value technological products, contributing to national economic growth and accomplishing the task of combining socio-economic development with defence (10) _______. [cite: 45]</p>
        `,
        questions: [
            { qNum: 1, options: { A: "Functioned ", B: "Functioning", C: "Function", D: "Functions" }, correct: "B" },
            { qNum: 2, options: { A: "mass", B: "massive", C: "massively", D: "massiveness" }, correct: "A" },
            { qNum: 3, options: { A: "at", B: "of", C: "on", D: "in" }, correct: "D" },
            { qNum: 4, options: { A: "on", B: "to", C: "in", D: "of" }, correct: "B" },
            { qNum: 5, options: { A: "reduction", B: "reduce", C: "increase", D: "increasing" }, correct: "A" },
            { qNum: 6, options: { A: "in", B: "on", C: "at", D: "of" }, correct: "D" },
            { qNum: 7, options: { A: "coming", B: "come", C: "overcome", D: "overcoming" }, correct: "D" },
            { qNum: 8, options: { A: "of", B: "in", C: "for", D: "about" }, correct: "C" },
            { qNum: 9, options: { A: "provide", B: "provided", C: "providing", D: "provides " }, correct: "C" },
            { qNum: 10, options: { A: "consolidate", B: "consolidation", C: "consolidator", D: "consolidating" }, correct: "B" },
        ]
    },
    {
        id: 'passage7',
        passageText: `
            <p>From the 6th Plenum of the Party Central Committee (November 1939), and the 7th Plenum (November 1940), especially the 8th Plenum (May 1941), ( 1 ) _______ by Nguyen Ai Quoc, the CPV (under the name the Indochina Communist Party) decided to shift its revolutionary activities with a focus ( 2 ) _______ national liberation, and to begin building ( 3 ) _______ bases and preparing for taking ( 4 ) _______ arms to seize power. [cite: 47]</p>
            <p>Under the directive of President Ho Chi Minh and the ( 5 ) _______ of comrade Vo Nguyen Giap, the Vietnam Propaganda Unit of the Liberation Army, the forerunner of the VPA, was founded ( 6 ) _______ the basis of revolutionary armed teams in Viet Bac on 22 December 1944 in Nguyen Binh district, Cao Bang province. [cite: 48]</p>
            <p>At the time of ( 7 ) _______, the Vietnam Propaganda Unit of the Liberation Army, with only 34 cadres and soldiers, soon showcased the tradition of fighting ( 8 ) _______ foreign invaders and military art of the nation. [cite: 49]</p>
            <p>( 9 ) _______ President Ho Chi Minh’s directive ‘The first battle must be won’, two days after its formation, with a surprise, brave and ingenious way of fighting, the Propaganda Unit of the Liberation Army won the two first battles of Phai Khat and Na Ngan, heralding the VPA’s tradition of destroying the enemy, assuredness of victory and ( 10 ) _______ to win from the first battle. [cite: 50]</p>
        `,
        questions: [
            { qNum: 1, options: { A: "chair ", B: "chaired", C: "chairman", D: "chairs" }, correct: "B" },
            { qNum: 2, options: { A: "on", B: "of", C: "in", D: "at" }, correct: "A" },
            { qNum: 3, options: { A: "revolutionary", B: "revolution", C: "revolute ", D: "revolutions" }, correct: "A" },
            { qNum: 4, options: { A: "on", B: "at", C: "up", D: "of" }, correct: "C" },
            { qNum: 5, options: { A: "commanding", B: "commando", C: "commander", D: "command" }, correct: "D" },
            { qNum: 6, options: { A: "in", B: "on", C: "at", D: "of" }, correct: "B" },
            { qNum: 7, options: { A: "found", B: "founder", C: "foundation", D: "founded" }, correct: "C" },
            { qNum: 8, options: { A: "of", B: "again", C: "against", D: "about" }, correct: "C" },
            { qNum: 9, options: { A: "Implemented", B: "Implementation", C: "Implement", D: "Implementing" }, correct: "D" },
            { qNum: 10, options: { A: "determine", B: "determined", C: "determinant", D: "determination" }, correct: "D" },
        ]
    },
    {
        id: 'passage8',
        passageText: `
            <p>Established on 3 March 1959, the Border Guard is the people’s armed force of the CPV and the State of the ( 1 ) _______ Republic of Vietnam, constitutes part of the VPA, and plays a core and specialized role ( 2 ) _______ managing and protecting the sovereignty, territorial integrity, security and order of the national borders ( 3 ) _______ land, seas, islands and border gates according to its tasks ( 4 ) _______ by law. [cite: 52]</p>
            <p>It is also a force component in the border provincial and district defence zones. [cite: 53]</p>
            <p>The Border Guard exercises its functions ( 5 ) _______ accordance with the laws of the Socialist Republic of Vietnam and international conventions, of ( 6 ) _______ the Socialist Republic of Vietnam is a signatory, related to sovereignty, security of the national borders on land, seas, islands and border gates. [cite: 54]</p>
            <p>The Border Guard is ( 7 ) _______ with managing and protecting the national borderline and the system of national border markers, fighting against and ( 8 ) _______ all acts of encroaching upon the border territory, illegal border crossings on land and at seas, illegal ( 9 ) _______ and residence in the country, illegal exploitation of natural resources and other acts of infringing upon the national sovereignty, interests, security and order, which may cause harms to the border environment. [cite: 55]</p>
            <p>The Border Guard also takes the lead role in working with concerned branches and localities to ( 10 ) _______ manage and protect the national border and maintain security, order and social safety of the national borders on land, seas, islands, and border gates. [cite: 56]</p>
        `,
        questions: [
            { qNum: 1, options: { A: "Social", B: "Socialize", C: "Socialist", D: "Socialism" }, correct: "C" },
            { qNum: 2, options: { A: "on", B: "of", C: "in", D: "at" }, correct: "C" },
            { qNum: 3, options: { A: "on", B: "at", C: "up", D: "of" }, correct: "A" },
            { qNum: 4, options: { A: "prescribe", B: "prescribed", C: "prescribing", D: "prescribes " }, correct: "B" },
            { qNum: 5, options: { A: "in", B: "on", C: "at", D: "of" }, correct: "A" },
            { qNum: 6, options: { A: "that", B: "what", C: "where", D: "which" }, correct: "D" },
            { qNum: 7, options: { A: "tasks", B: "tasked", C: "tasking", D: "task" }, correct: "B" },
            { qNum: 8, options: { A: "prevented", B: "prevention", C: "prevent", D: "preventing" }, correct: "D" },
            { qNum: 9, options: { A: "immigration", B: "immigrate", C: "immigrated", D: "immigrating" }, correct: "A" },
            { qNum: 10, options: { A: "effective", B: "effectively", C: "ineffective", D: "effect" }, correct: "B" },
        ]
    },
    {
        id: 'passage9',
        passageText: `
            <p>Making the VPA ( 1 ) _______ in politics and spirit is a matter of principle of the VPA’s organization and operation, ( 2 ) _______ the viewpoint of regarding humans as the determinant factor in the battlefield and is aimed ( 3 ) _______ strengthening the CPV’s leadership and the state management effectiveness and maintaining the working class nature, the national and people’s characteristics of the VPA. [cite: 58]</p>
            <p>The VPA shall be made strong in politics, ideology and organization, unwaveringly ( 4 ) _______ to the CPV, the Homeland and the people, the absolutely confident in the CPV’s leadership and the state ( 5 ) _______, the renovation cause and the path ( 6 ) _______ the socialism in Vietnam. [cite: 59]</p>
            <p>At the same time, the VPA is to ( 7 ) _______ the sense of vigilance to defeat the ‘peaceful evolution’ and riot and subversion activities and plot of ‘depoliticising the military’ of the hostile forces. [cite: 60]</p>
            <p>It is also strongly attached to the people and ready to sacrifice for the independence and freedom of the Homeland, and for the ( 8 ) _______ of the people. [cite: 61]</p>
            <p>The VPA is determined to build and bring ( 9 ) _______ full play the role of political units and political officers at all levels, innovate and raise the quality and effectiveness of the Party and political work, pay due ( 10 ) _______ to officer development, especially those at operational and strategic levels. [cite: 62]</p>
        `,
        questions: [
            { qNum: 1, options: { A: "strength", B: "strengthen ", C: "strong", D: "strongly" }, correct: "C" },
            { qNum: 2, options: { A: "manifestation ", B: "manifested", C: "manifest", D: "manifesting" }, correct: "B" },
            { qNum: 3, options: { A: "on", B: "at", C: "up", D: "of" }, correct: "B" },
            { qNum: 4, options: { A: "loyal", B: "loyalty ", C: "loyally ", D: "loyalist " }, correct: "A" },
            { qNum: 5, options: { A: "management", B: "manage", C: "manager", D: "managing" }, correct: "A" },
            { qNum: 6, options: { A: "in", B: "of", C: "at", D: "to" }, correct: "D" },
            { qNum: 7, options: { A: "raising", B: "raise", C: "rise", D: "risen" }, correct: "B" },
            { qNum: 8, options: { A: "happy", B: "happiness", C: "happily", D: "unhappy" }, correct: "B" },
            { qNum: 9, options: { A: "about", B: "up", C: "into", D: "down" }, correct: "C" },
            { qNum: 10, options: { A: "intention ", B: "intend ", C: "attend ", D: "attention" }, correct: "D" },
        ]
    },
    {
        id: 'passage10',
        passageText: `
            <p>( 1 ) _______ parallel with political-spiritual work, the VPA always pays special attention to education, training and conducting exercises. [cite: 64]</p>
            <p>Therefore, the VPA shall regularly and comprehensively renovate education, training and drilling, consonant ( 2 ) _______ the organizational structure, equipment, and the development of Vietnamese military art. [cite: 65]</p>
            <p>Great importance is attached to training and fostering ( 3 ) _______ and commanders with political steadfastness, good virtues, thoroughly grasping the military art, ( 4 ) _______ that of services and arms, the Main Force’s army corps and the local people’s warfare (operations of provincial and municipal defence zones) in all types of ( 5 ) _______ in the war to safeguard the Homeland. [cite: 66]</p>
            <p>The VPA is to develop comprehensive capability of leadership, command, management, education, and ( 6 ) _______ of the Party and political work, ( 7 ) _______ its forces with essential knowledge of military science and technology, information technology, foreign languages, and legal and ( 8 ) _______ matters so as to meet specific requirements at various levels. [cite: 67]</p>
            <p>Special attention is ( 9 ) _______ to the training of individual combat skills, combined operations and making the best use of existing weapons and equipment through the application of Vietnamese military art along the ‘basic, practical, and solid’ motto. [cite: 68]</p>
            <p>The VPA seeks to innovate training contents, programmes and methods in conformity ( 10 ) _______ the organizational structure, equipment and practical conditions of each unit, meeting the requirement of combat readiness for defending the country in the new situation. [cite: 69]</p>
        `,
        questions: [
            { qNum: 1, options: { A: "At", B: "Of", C: "On", D: "In" }, correct: "D" },
            { qNum: 2, options: { A: "with  ", B: "and", C: "of", D: "in" }, correct: "A" },
            { qNum: 3, options: { A: "leading", B: "leaders", C: "lead", D: "led" }, correct: "B" },
            { qNum: 4, options: { A: "included", B: "include", C: "including ", D: "include " }, correct: "C" },
            { qNum: 5, options: { A: "operation", B: "operate", C: "operates", D: "operating" }, correct: "A" },
            { qNum: 6, options: { A: "performance", B: "perform", C: "performing", D: "performed" }, correct: "A" },
            { qNum: 7, options: { A: "arm", B: "army", C: "arming", D: "armed" }, correct: "D" },
            { qNum: 8, options: { A: "society", B: "social", C: "socially", D: "socialize" }, correct: "B" },
            { qNum: 9, options: { A: "made", B: "taken", C: "done", D: "paid" }, correct: "D" },
            { qNum: 10, options: { A: "of ", B: "at", C: "with ", D: "on " }, correct: "C" },
        ]
    },
];

let currentPassageIndex = 0; // Bắt đầu từ bài đầu tiên

// Hàm này sẽ tạo HTML cho một bài đọc và các câu hỏi của nó
function renderPassage(passageData) {
    const quizContentDiv = document.getElementById('quiz-content');
    quizContentDiv.innerHTML = `
        <div class="passage">
            ${passageData.passageText}
        </div>
        <form class="quiz-form" id="quizForm-${passageData.id}">
            </form>
    `;

    const form = document.getElementById(`quizForm-${passageData.id}`);
    passageData.questions.forEach(q => {
        const questionBlock = document.createElement('div');
        questionBlock.className = 'question-block';
        questionBlock.id = `q${q.qNum}`;
        questionBlock.innerHTML = `<p class="question-number">${q.qNum}.</p><div class="options"></div>`;

        const optionsDiv = questionBlock.querySelector('.options');
        for (const [key, value] of Object.entries(q.options)) {
            const label = document.createElement('label');
            label.innerHTML = `<input type="radio" name="q${q.qNum}" value="${key}" onchange="checkSingleAnswer(this, '${q.correct}')"> <span>${key}. ${value}</span><span class="feedback-icon"></span>`;
            optionsDiv.appendChild(label);
        }
        form.appendChild(questionBlock);
    });
}

// Hàm chuyển bài đọc
function changePassage(direction) {
    const prevPassageIndex = currentPassageIndex;
    currentPassageIndex += direction;

    if (currentPassageIndex < 0) {
        currentPassageIndex = 0;
    }
    if (currentPassageIndex >= passagesData.length) {
        currentPassageIndex = passagesData.length - 1;
    }

    renderPassage(passagesData[currentPassageIndex]);
    updateNavigationButtons();
    document.getElementById('passage-indicator').textContent = `Bài ${currentPassageIndex + 1} / ${passagesData.length}`;
    document.getElementById('quizResult').style.display = 'none'; // Hide result when changing passage

    // Reset radio button states for the new passage (if needed, or load saved state)
    // For simplicity, we just re-render, which clears previous selections.
    // If you need to save user answers across passages, you'd add more complex logic here.
}

// Cập nhật trạng thái nút điều hướng
function updateNavigationButtons() {
    document.getElementById('prevBtn').disabled = currentPassageIndex === 0;
    document.getElementById('nextBtn').disabled = currentPassageIndex === passagesData.length - 1;
}

// Hàm kiểm tra một đáp án duy nhất (khi người dùng chọn)
function checkSingleAnswer(radioElement, correctAnswer) {
    const qName = radioElement.name;
    const questionBlockDiv = radioElement.closest('.question-block');
    const labels = questionBlockDiv.querySelectorAll('label');

    // Clear all previous highlights and icons for this question
    labels.forEach(label => {
        label.classList.remove('correct', 'incorrect');
        const feedbackIcon = label.querySelector('.feedback-icon');
        if (feedbackIcon) {
            feedbackIcon.textContent = '';
        }
    });

    const selectedValue = radioElement.value;
    const parentLabel = radioElement.closest('label');
    const selectedFeedbackIcon = parentLabel.querySelector('.feedback-icon');

    if (selectedValue === correctAnswer) {
        parentLabel.classList.add('correct');
        if (selectedFeedbackIcon) {
            selectedFeedbackIcon.textContent = '✓';
        }
    } else {
        parentLabel.classList.add('incorrect');
        if (selectedFeedbackIcon) {
            selectedFeedbackIcon.textContent = '✗';
        }
        // If selected is incorrect, also highlight the actual correct answer in green
        labels.forEach(label => {
            if (label.querySelector('input').value === correctAnswer) {
                label.classList.add('correct');
                const correctFeedbackIcon = label.querySelector('.feedback-icon');
                if (correctFeedbackIcon) {
                    correctFeedbackIcon.textContent = '✓';
                }
            }
        });
    }
}

// Hàm kiểm tra tất cả đáp án của bài hiện tại (khi nhấn nút "Xem kết quả")
function checkAllAnswers() {
    const currentPassageData = passagesData[currentPassageIndex];
    let score = 0;
    const totalQuestions = currentPassageData.questions.length;

    currentPassageData.questions.forEach(q => {
        const qName = `q${q.qNum}`;
        const questionBlockDiv = document.getElementById(qName);
        if (!questionBlockDiv) return; // Skip if element not found for some reason

        const formElements = document.querySelector(`#quizForm-${currentPassageData.id}`).elements[qName];
        const selectedInput = formElements ? (formElements.value ? formElements : Array.from(formElements).find(input => input.checked)) : null;
        const selectedValue = selectedInput ? selectedInput.value : null;

        const labels = questionBlockDiv.querySelectorAll('label');

        // Clear previous highlights and icons
        labels.forEach(label => {
            label.classList.remove('correct', 'incorrect');
            const feedbackIcon = label.querySelector('.feedback-icon');
            if (feedbackIcon) {
                feedbackIcon.textContent = '';
            }
        });

        if (selectedValue) {
            labels.forEach(label => {
                if (label.querySelector('input').value === selectedValue) {
                    const feedbackIcon = label.querySelector('.feedback-icon');
                    if (selectedValue === q.correct) {
                        label.classList.add('correct');
                        if (feedbackIcon) feedbackIcon.textContent = '✓';
                        score++;
                    } else {
                        label.classList.add('incorrect');
                        if (feedbackIcon) feedbackIcon.textContent = '✗';
                        // Highlight the actual correct answer
                        labels.forEach(correctLabel => {
                            if (correctLabel.querySelector('input').value === q.correct) {
                                correctLabel.classList.add('correct');
                                const correctFeedbackIcon = correctLabel.querySelector('.feedback-icon');
                                if (correctFeedbackIcon) correctFeedbackIcon.textContent = '✓';
                            }
                        });
                    }
                }
            });
        } else { // No option selected for this question
            // Just highlight the correct answer
            labels.forEach(label => {
                if (label.querySelector('input').value === q.correct) {
                    label.classList.add('correct');
                    const feedbackIcon = label.querySelector('.feedback-icon');
                    if (feedbackIcon) feedbackIcon.textContent = '✓';
                }
            });
        }
    });

    const resultDiv = document.getElementById('quizResult');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `Bạn đã trả lời đúng ${score} / ${totalQuestions} câu.`;
}


// Chạy khi trang web được tải
document.addEventListener('DOMContentLoaded', () => {
    if (passagesData.length > 0) {
        renderPassage(passagesData[currentPassageIndex]);
        updateNavigationButtons();
    }
});