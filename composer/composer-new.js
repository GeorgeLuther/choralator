/* 
COMPOSER - Generates three or four part polyphonic music by developing and 
            concatonating musical sections and variations into a finite structure.
            This version takes a top-down approach: determining the overall form before developing motifs.

            Future versions will take a users choices in a GUI
            and attempt to create music with an overall 'emotional story arc' structure 
            by implementing concepts like disonance/consonance, speed, density, range, and frequncy-band.
            
            In another version, Composer will explore other methods/approachs to how music can be developed or improvised...
            I.E. Starting from a top-down approach, a bottom-up approach, through-composed, etc.

    Strategy:
1) Determines an overall formal structure to the piece (the distribution of sections, subsections, variations/developments).
    
    a) Determines the number of sections.
    b) Determines the organization of these sections, if there will be repetition, variation, and/or development.
    
    c) Determines the number of subsections for each section.
    d) Determines the organization of these subsections... will there will be repetition and/or variation?
    
2) Uses weighted randomness along with music theory principles regarding tonal/modal relationships
   to generate chord progressions for each section/subsection given their context in the form.

3) Generates monophonic motifs and concatenates them into phrases based on harmonic and formal context.
    a) consider length and complexity of the piece
    b) consider disonance/consonance, speed, density, range, and frequncy-band of sections, subsections
    c) notes are given rhythmic value based on their context in relation to the chord
    c) the resulting array of pitch information becomes the melody.

4) The bassline is created from the root notes (and occasionally 3rd or 5th) of the chords 
    based on the rhythmic structure implied by the motifs.

5) The additional voices are created based on the least represented chord tones and the rhythm and contour implied by the melody and bass. 
*/

/* Form, Subsections, Phrases, Motifs

motifs, phrases, subsections/variations, sections = form

motifs > phrases > variatons > sections > melody
motifs > variations + repetitions > phrases > > variations + repetitions > sections > variations + repetitions = FORM

FORM > SECTIONS > variations, repetitions > PHRASES > variations, repetitions > MOTIFS > variations, repetitions 
 */

//LOGIC FUNCTIONS///////////////////////////////////////////////////////////////
const rand=(min,max)=>{  
    min=Math.ceil(min) 
    max=Math.floor(max) 
    return Math.floor(Math.random()*(max-min+1))+min 
}
const flipCoin=()=> rand(0,1)
const isOdd=(num)=> num % 2 === 0
const nearest=(arr,n)=> arr.reduce((prev,curr)=> Math.abs(curr-n) < Math.abs(prev-n) ? curr : prev)