import xeria1 from '../../Assets/ImageAskhsewn/xeria1.png';
import xeria2 from '../../Assets/ImageAskhsewn/xeria2.png';
import xeria3 from '../../Assets/ImageAskhsewn/xeria3.png';
import trik1 from '../../Assets/ImageAskhsewn/trik1.png';
import trik2 from '../../Assets/ImageAskhsewn/trik2.png';
import trik3 from '../../Assets/ImageAskhsewn/trik3.png';
import stith1 from '../../Assets/ImageAskhsewn/stith1.png';
import stith2 from '../../Assets/ImageAskhsewn/stith2.png';
import stith3 from '../../Assets/ImageAskhsewn/stith3.png';
import om1 from '../../Assets/ImageAskhsewn/om1.png';
import om2 from '../../Assets/ImageAskhsewn/om2.png';
import om3 from '../../Assets/ImageAskhsewn/om3.png';
import abs1 from '../../Assets/ImageAskhsewn/abs1.png';
import abs2 from '../../Assets/ImageAskhsewn/abs2.png';
import abs3 from '../../Assets/ImageAskhsewn/abs3.png';
import tetr1 from '../../Assets/ImageAskhsewn/tetr1.png';
import tetr2 from '../../Assets/ImageAskhsewn/tetr2.png';
import tetr3 from '../../Assets/ImageAskhsewn/tetr3.png';
import plat1 from '../../Assets/ImageAskhsewn/plat1.png';
import plat2 from '../../Assets/ImageAskhsewn/plat2.png';
import plat3 from '../../Assets/ImageAskhsewn/plat3.png';
import pixis1 from '../../Assets/ImageAskhsewn/pixis1.png';
import pixis2 from '../../Assets/ImageAskhsewn/pixis2.png';
import pixis3 from '../../Assets/ImageAskhsewn/pixis3.png';
import glt1 from '../../Assets/ImageAskhsewn/glt1.png';
import glt2 from '../../Assets/ImageAskhsewn/glt2.png';
import glt3 from '../../Assets/ImageAskhsewn/glt3.png';
import gamp1 from '../../Assets/ImageAskhsewn/gamp1.png';
import gamp2 from '../../Assets/ImageAskhsewn/gamp2.png';

const exerciseTable = [
    {
        muscleGroup: 'Calves',
        exercises: [
            {
                Onoma: 'Άρσεις γαστροκνημίων στο smith',
                ImageLink: gamp1,
                Epeksigisi: '1) Τοποθέτησε ένα step ακριβώς στο κέντρο του smith και λίγο πιο μπροστά από την ευθεία της μπάρας<br/><br/>2) Ανέβα στο step με τα πόδια σε μια σχετικά στενή στάση στερεώνοντας την μπάρα καλά πίσω στους ώμους σου<br/><br/>3) Ανασήκωσε την μπάρα και απελευθέρωσέ την από smith χαμηλώνοντας όσο μπορείς πιο κάτω τις φτέρνες μέχρι να νιώσεις ένα τράβηγμα στον γαστροκνήμιο. Αυτή είναι η αρχική θέση<br/><br/>4) Ανασήκωσε αργά και σταθερά, όσο ψηλά μπορείς τις φτέρνες και σφίξε τους μύες της γάμπας<br/><br/>5) Παύση για 2 δευτ. και επέστρεψε στην αρχική θέση<br/><br/>6) Επανάλαβε'
            },
            {
                Onoma: 'Όρθιες άρσεις γαστροκνημίων στο όργανο',
                ImageLink: gamp2,
                Epeksigisi: '1) Στάσου όρθιος κάτω από τα μαξιλάρια του οργάνου έχοντας σιγουρέψει ότι πιέζουν επαρκώς τους ώμους<br/><br/>2) Κράτησε από τις λαβές και έχε τα πόδια κλειστά, ενώ τα πέλματα πατάνε σταθερά στην πλατφόρμα του οργάνου ή να κάμπτονται ελαφρώς προς τα κάτω. Αυτή είναι η αρχική θέση.<br/><br/>3) Ανασήκωσε όσο ψηλά μπορείς τις φτέρνες και σφίξε τους μύες της κνήμης<br/><br/>4) Παύση για 2 δευτ. και επέστρεψε στην αρχική θέση.<br/><br/>5) Επαναλάβε'
            }
        ]
    },
    {
        muscleGroup: 'Glutes',
        exercises: [
            {
                Onoma: 'Βαθύ κάθισμα με αλτήρες',
                ImageLink: glt1,
                Epeksigisi: '1) Σταθείτε όρθιοι κρατώντας δυο αλτήρες με τα πόδια στο άνοιγμα των ώμων.<br/><br/>2) Εισπνεύστε και χαμηλώστε το σώμα σας προτάσσοντας τους γλουτούς προς τα πίσω και το στήθος προς τα μπροστά.<br/><br/>3) Συνεχίστε μέχρι να φτάσετε σε οκλαδόν στάση (μηροί στις 45 μοίρες με το πάτωμα) ή μέχρι οι αλτήρες να φτάσουν το πάτωμα.<br/><br/>4) Παύση για 1 δευτ. Εκπνεύστε και ανυψώστε το σώμα σας στην αρχική του θέση.<br/><br/>5) Επαναλάβετε.'
            },
            {
                Onoma: 'Μπροστινό βαθύ κάθισμα – Front squat',
                ImageLink: glt2,
                Epeksigisi: '1) Στηρίξτε μια μπάρα στον ορθοστάτη σε ύψος λίγο παρακάτω από το ύψος της κλείδας<br/><br/>2) Φέρτε τον εαυτό σας μπροστά στον ορθοστάτη και λυγίστε ελαφρώς τα γόνατα ώστε να έρθει το άνω μέρος του στήθους ακριβώς κάτω από την μπάρα<br/><br/>3) Στηρίξτε την μπάρα μπροστά στους ώμους σας κρατώντας την με τα χέρια σταυρωτά στο στήθος.<br/><br/>4) Σταθείτε όρθιοι και απελευθερώστε την μπάρα<br/><br/>5) Κάντε ένα βήμα πίσω και σταθείτε με τα πόδια ανοιχτά όσο το άνοιγμα των ώμων σας. Αυτή είναι η αρχική σας θέση.<br/><br/>6) Εισπνεύστε και χαμηλώστε το σώμα σας σε ορθή γωνία με το έδαφος και διατηρώντας τα πέλματα κολλημένα στο έδαφος.<br/><br/>7) Συνεχίστε μέχρι να φτάσετε σε ημι-οκλαδόν στάση (μηροί στις 90 μοίρες). Παύση για 1 δευτ.<br/><br/>8) Εκπνεύστε και ανυψώστε το σώμα σας στην αρχική του θέση.<br/><br/>9) Επαναλάβετε.'
            },
            {
                Onoma: 'Λακτίσματα γλουτιαίων στο μηχάνημα',
                ImageLink: glt3,
                Epeksigisi: '1) Στάσου όρθιος με το μαξιλάρι του μηχανήματος πίσω από το γόνατο του ενός ποδιού και επέλεξε το επιθυμητό βάρος στις πλάκες<br/><br/>2) Στήριξε τα χέρια στη λαβή του μηχανήματος και σφίξε την κοιλιά<br/><br/>3) Κρατώντας τη πλάτη ευθεία και τους κοιλιακούς σφιχτούς, σπρώξε το μαξιλάρι προς τα πίσω χρησιμοποιώντας τη δύναμη στους γλουτούς σου<br/><br/>4) Επέστρεψε πολύ αργά και ελεγχόμενα<br/><br/>5) Επανέλαβε και έπειτα άλλαξε πόδι'
            }
        ]
    },
    {
        muscleGroup: 'Forearms',
        exercises: [
            {
                Onoma: 'Κάμψεις καρπών με μπάρα',
                ImageLink: pixis1,
                Epeksigisi: '1) Καθίστε σε έναν πάγκο κρατώντας μια μπάρα χρησιμοποιώντας ύπτια λαβή και τα χέρια στο άνοιγμα των ώμων.<br/><br/>2) Τοποθετήστε τα πόδια σας στο πάτωμα, σε μια απόσταση που να είναι ελαφρώς μεγαλύτερη από το άνοιγμα των ώμων.<br/><br/>3) Κλίνετε προς τα εμπρός και τοποθετήστε το πίσω μέρος των πήχεων στα γόνατά σας. Οι καρποί λίγο πιο έξω από τα γόνατα ώστε να επιτραπεί η κίνηση. Αυτή είναι η θέση εκκίνησης.<br/><br/>4) Χαμηλώστε την μπάρα κάτω από τα γόνατά σας (όσο το δυνατόν περισσότερο) κάμπτωντας μόνο τους καρπούς σας. Έχετε τους πήχεις σας κολλημένους στους μηρούς σας. Κρατήστε για 1”.<br/><br/>5) Σηκώστε την μπάρα συνεχίζοντας προς τα πάνω πέρα από την αρχική θέση (στο μέτρο του δυνατού), χρησιμοποιώντας μόνο τους καρπούς σας. Κρατήστε για 1” πιέζοντας τους μυς του αντιβραχίονα.<br/><br/>6) Επαναλάβετε ολόκληρη την κίνηση για τον επιθυμητό αριθμό των επαναλήψεων.'
            },
            {
                Onoma: 'Κάμψεις καρπών με αλτήρα',
                ImageLink: pixis2,
                Epeksigisi: '1) Κάθισε σε έναν πάγκο κρατώντας έναν αλτήρα στο ένα χέρι χρησιμοποιώντας ύπτια λαβή (παλάμη προς τα πάνω)<br/><br/>2) Τοποθέτησε τα πόδια στο πάτωμα, σε μια απόσταση που να είναι ελαφρώς μεγαλύτερη από το άνοιγμα των ώμων.<br/><br/>3) Κλίνε προς τα εμπρός και τοποθέτησε τον πήχη στο γόνατο. Ο καρπός λίγο πιο έξω από το γόνατο ώστε να επιτραπεί η κίνηση. Αυτή είναι η θέση εκκίνησης.<br/><br/>4) Χαμήλωσε τον αλτήρα κάτω από το γόνατο (όσο το δυνατόν περισσότερο) κάμπτοντας μόνο τον καρπό. Έχε τον πήχη κολλημένο στο μηρό. Κράτα για 1 δευτ.<br/><br/>5) Σήκωσε τον αλτήρα συνεχίζοντας προς τα πάνω πέρα από την αρχική θέση (στο μέτρο του δυνατού), χρησιμοποιώντας μόνο τους μυς του καρπού. Κράτα για 1 δευτ.<br/><br/>6) Επανάλαβε ολόκληρη την κίνηση για τον επιθυμητό αριθμό των επαναλήψεων.'
            },
            {
                Onoma: 'Ανάποδες κάμψεις δικεφάλων με μπάρα στο μαξιλάρι',
                ImageLink: pixis3,
                Epeksigisi: '1) Καθίστε στο Larry Scott και κρατήστε μια μπάρα με πρηνή λαβή (παλάμες προς τα κάτω) φέρνοντάς την στο ύψος των ώμων. Αυτή είναι η αρχική θέση.<br/><br/>2) Το πίσω μέρος των μπράτσων (τρικέφαλοι) σας θα πρέπει να εφάπτονται πλήρως στο μαξιλάρι.<br/><br/>3) Χρησιμοποιώντας μόνο τα μπράτσα σας για αυτή την κίνηση κατεβάστε αργά και ελεγχόμενα την μπάρα, εκπνέοντας ταυτόχρονα.<br/><br/>4) Συνεχίστε προς τα κάτω μέχρι τα χέρια να έχουν επεκταθεί χωρίς όμως να κλειδώσουν οι αγκώνες.<br/><br/>5) Κρατήστε για ένα δευτερόλεπτο καθώς σφίγγετε τους πήχεις σας.<br/><br/>6) Επιστρέψτε το βάρος στην αρχική θέση, εισπνέοντας καθώς το κάνετε.<br/><br/>7) Επαναλάβατε.'
            }
        ]
    },
    {
        muscleGroup: 'Back',
        exercises: [
            {
                Onoma: 'Έλξεις στο μονόζυγο',
                ImageLink: plat1,
                Epeksigisi: '1) Τοποθέτησε τα χέρια σου σε ένα μονόζυγο σε πλήρη έκταση και σε άνοιγμα μεγαλύτερο από αυτό των ώμων<br/><br/>2) Σήκωσε τα πόδια από το πάτωμα σταυρώνοντας τα. Αυτή είναι η θέση εκκίνησης<br/><br/>3) Εισέπνευσε και ανύψωσε το σώμα με μια εκρηκτική αλλά σταθερή κίνηση χωρίς να χάνεις τη φόρμα σου<br/><br/>4) Συνέχισε μέχρι το στήθος να ακουμπήσει την μπάρα. Παύση για 1 δευτ.<br/><br/>5) Κατέβα με μια αργή και ελεγχόμενη κίνηση μέχρι την θέση εκκίνησης.<br/><br/>6) Επανάλαβε'
            },
            {
                Onoma: 'Χαμηλή κωπηλατική με μπάρα',
                ImageLink: plat2,
                Epeksigisi: '1) Κάθισε στο όργανο της κωπηλατικής και πιάσε μια μπάρα με πρηνή λαβή σε άνοιγμα μεγαλύτερο από αυτό των ώμων<br/><br/>2) Τα χέρια σε πλήρη έκταση και η πλάτη ελαφρώς προς τα πίσω. Αυτή είναι η θέση εκκίνησης<br/><br/>3) Τράβα την μπάρα προς το μέρος σσου με τους αγκώνες να εφάπτονται στα πλευρά σου<br/><br/>4) Συνέχισε μέχρι η μπάρα να έχει φτάσει στο ύψος της κοιλιάς και οι αγκώνες να έχουν βγει ελαφρώς προς τα πίσω.<br/><br/>5) Παύση για 1 δευτ. και με μια ελεγχόμενη κίνηση επέστρεψε στην θέση εκκίνησης<br/><br/>6) Επανάλαβε'
            },
            {
                Onoma: 'Σκυφτή κωπηλατική με αλτήρες',
                ImageLink: plat3,
                Epeksigisi: '1) Πιάσε έναν αλτήρα σε κάθε χέρι με ουδέτερη λαβή<br/><br/>2) Λύγισε τα γόνατα, φέρε τα χέρια σε έκταση μπροστά σου και σκύψε προς τα μπροστά<br/><br/>3) Η πλάτη να βρίσκεται σε γωνία 30 μοιρών. Αυτή είναι η θέση εκκίνησης<br/><br/>4) Εισέπνευσε και τράβα τους αλτήρες προς τα πάνω, σύριζα με τους μηρούς<br/><br/>5) Συνέχισε μέχρι οι αγκώνες να έχουν φύγει πίσω από τα πλευρά σου. Παύση για 1 δευτ<br/><br/>6) Εξέπνευσε και χαμήλωσε τους αλτήρες στην αρχική τους θέση.<br/><br/>7) Επανάλαβε.'
            }
        ]
    },
    {
        muscleGroup: 'Adductors',
        exercises: [
            {
                Onoma: 'Προσαγωγές ισχίου στο όργανο',
                ImageLink: '',
                Epeksigisi: '1) Καθίστε στο όργανο των προσαγωγών προσαρμόζοντας το στις 45-60 μοίρες άνοιγμα<br/><br/>2) Οι μηροί θα πρέπει να εφάπτονται με τα μαξιλαράκια και θα πρέπει να νιώθετε ήδη ένα ελαφρύ τράβηγμα.<br/><br/>3) Εισπνεύστε και πιέστε προς τα μέσα κλείνοντας τα πόδια.<br/><br/>4) Όταν τα μαξιλαράκια έρθουν σε επαφή κάντε μια παύση για 1 δευτ.<br/><br/>5) Εκπνεύστε και επιστρέψτε στην αρχική σας θέση.<br/><br/>6) Επαναλάβετε'
            },
            {
                Onoma: 'Προσαγωγές ισχίου στο όργανο',
                ImageLink: '',
                Epeksigisi: '1) Προσαρμόστε το γέμισμα έτσι ώστε τα πόδια σας να είναι πλήρως κλειστά και τα μαξιλαράκια να αγγίζουν τα πλαϊνά των μηρών σας.<br/><br/>2) Καθίστε στο μηχάνημα απαγωγέα και επιλέξτε ένα βάρος με το οποίο αισθάνεστε άνετα και πιάστε τις λαβές στο πλάι. Αυτή είναι η αρχική σας θέση.<br/><br/>3) Πιέστε αργά τα μαξιλαράκια με τα πόδια σας για να τα απομακρύνετε το ένα από το άλλο ενώ εκπνέετε.<br/><br/>4) Κάντε μια σύντομη παύση μόλις συναντηθούν τα πόδια σας και μετά επιστρέψτε αργά στην αρχική θέση.<br/><br/>5) Επαναλάβετε για επαναλήψεις.'
            }
        ]
    },
    {
        muscleGroup: 'Quads',
        exercises: [
            {
                Onoma: 'Βαθύ κάθισμα – Squat',
                ImageLink: tetr1,
                Epeksigisi: '1) Στηρίξτε μια μπάρα στον ορθοστάτη σε ύψος λίγο παραπάνω από το ύψος της κλείδας.<br/><br/>2) Σκύψτε και φέρτε τον εαυτό σας κάτω από την μπάρα ακουμπώντας την με το κάτω μέρος του αυχένα και τους ώμους.<br/><br/>3) Πιάστε την μπάρα δεξιά αριστερά και σηκώστε την από τους ορθοστάτες<br/><br/>4) Κάντε ένα βήμα πίσω και σταθείτε με τα πόδια ανοιχτά όσο το άνοιγμα των ώμων σας. Αυτή είναι η αρχική σας θέση.<br/><br/>5) Εισπνεύστε και χαμηλώστε το σώμα σας προτάσσοντας τους γλουτούς προς τα πίσω και το στήθος προς τα μπροστά.<br/><br/>6) Συνεχίστε μέχρι να φτάσετε σε οκλαδόν στάση (μηροί στις 45 μοίρες με το πάτωμα). Παύση για 1 δευτ.<br/><br/>7) Εκπνεύστε και ανυψώστε το σώμα σας στην αρχική του θέση.<br/><br/>8) Επαναλάβετε.'
            },
            {
                Onoma: 'Πρέσα 45 μοιρών',
                ImageLink: tetr2,
                Epeksigisi: '1) Ρυθμίστε το βάρος που χρειάζεστε για την άσκηση και καθίστε στο όργανο με την πλάτη στις 45 μοίρες.<br/><br/>2) Τοποθετείστε τα πόδια σας στην πλατφόρμα με άνοιγμα ίσο ή λίγο μεγαλύτερο από αυτό των ώμων.<br/><br/>3) Τα γόνατα θα πρέπει να βρίσκονται σε στάση ημι-οκλαδόν (90 μοίρες). Αυτή είναι η αρχική θέση.<br/><br/>4) Κρατώντας γερά το όργανο από τις πλαϊνές λαβές, εισπνέυστε και εκτείνετε τα πόδια σας προς τα πάνω.<br/><br/>5) Παύση για 1 δευτ. και επιστρέψτε στην αρχική σας θέση.<br/><br/>6) Επαναλάβετε.'
            },
            {
                Onoma: 'Εκτάσεις τετρακεφάλων στο όργανο',
                ImageLink: tetr3,
                Epeksigisi: '1) Καθίστε στο όργανο των εκτάσεων ρυθμίζοντας το μαξιλάρι ακριβώς μπροστά από το άνω μέρος του πέλματος.<br/><br/>2) Τα πόδια σας θα πρέπει να είναι σε γωνία μικρότερη των 90 μοιρών ή να φέρετε το όργανο στη θέση 1. Αυτή είναι η αρχική σας θέση.<br/><br/>3) Κρατώντας γερά το όργανο από τις πλαϊνές λαβές, εισπνεύστε και εκτείνετε τα πόδια σας προς τα πάνω.<br/><br/>4) Συνεχίστε μέχρι τα πόδια να έχουν έρθει σε ευθεία γραμμή. Παύση για 1 δευτ.<br/><br/>5) Νιώστε την σύσπαση και εκπνεύστε επιστρέφοντας στην αρχική σας θέση.<br/><br/>6) Επαναλάβετε'
            }
        ]
    },
    {
        muscleGroup: 'Abs',
        exercises: [
            {
                Onoma: 'Άρσεις κορμού',
                ImageLink: abs1,
                Epeksigisi: '1) Ξάπλωσε σε μια ευθεία και μαλακή επιφάνεια ή σε πάγκο<br/><br/>2) Τα χέρια πίσω από το κεφάλι και τα πόδια ελαφρώς λυγισμένα. Αυτή είναι η αρχική σου θέση<br/><br/>3) Εισέπνευσε και ανασήκωσε όλο τον κορμό από το πάτωμα<br/><br/>4) Συνέχισε μέχρι ο κορμός έρθει σε ορθή γωνία με το πάτωμα<br/><br/>5) Εξέπνευσε και επέστρεψε στην αρχική σου θέση<br/><br/>6) Επανάλαβε'
            },
            {
                Onoma: 'Ξαπλωτές άρσεις γοφού-ποδιών',
                ImageLink: abs2,
                Epeksigisi: '1) Ξάπλωσε σε μια ευθεία και μαλακή επιφάνεια στο πάτωμα<br/><br/>2) Τοποθέτησε τις παλάμες στο πάτωμα δεξιά και αριστερά έχοντας τα πόδια σε πλήρη έκταση. Αυτή είναι η αρχική σου θέση<br/><br/>3) Κρατώντας κόντρα με τα χέρια σας εισέπνευσε και ανασηκώσε τους γοφούς από το πάτωμα<br/><br/>4) Προσπάθησε να μη λυγίσεις τα γόνατα καθ όλη τη διάρκεια της άρσης<br/><br/>5) Μόλις νιώσεις ότι έχει γίνει πλήρη σύσπαση των κοιλιακών κάνε μια παύση για 1 δευτ. με τους γοφούς στον αέρα<br/><br/>6) Κατέβασε γοφούς και πόδια στην αρχική τους θέση εκπνέοντας ταυτόχρονα<br/><br/>7) Επανάλαβε'
            },
            {
                Onoma: 'Σανίδα',
                ImageLink: abs3,
                Epeksigisi: '1) Ξάπλωσε σε μια ευθεία και μαλακή επιφάνεια στο πάτωμα στηριζόμενος στους αγκώνες σου σε ορθή γωνία<br/><br/>2) Φέρε όλο το σώμα σε ευθεία γραμμή παράλληλη με το πάτωμα, ίσιο σαν σανίδα<br/><br/>3) Σφίξε τους κοιλιακούς και κράτα αυτή τη στάση για όσο περισσότερο χρόνο μπορείς<br/><br/>4) Προσπάθησε να μη χάσεις την φόρμα σου σε όλη την άσκηση'
            }
        ]
    },
    {
        muscleGroup: 'Deltoids',
        exercises: [
            {
                Onoma: 'Εμπρόσθιες άρσεις με αλτήρες',
                ImageLink: om1,
                Epeksigisi: '1) Στάσου κρατώντας έναν αλτήρα σε κάθε χέρι με την παλάμη σε πρηνή λαβή<br/><br/>2) Κράτησε τα βαράκια με τις παλάμες στραμμένες στους μηρούς και τα χέρια σε πλήρη έκταση. Αυτή είναι η θέση εκκίνησης<br/><br/>3) Σήκωσε το ένα βάρος προς τα μπροστά και άνω, διατηρώντας παράλληλα μια μικρή κάμψη στον αγκώνα. Οι παλάμες θα πρέπει να είναι πάντα στραμμένες προς τα κάτω<br/><br/>4) Συνέχισε την άρση του αλτήρα μέχρι το χέρι να είναι λίγο παραπάνω από παράλληλο με το πάτωμα<br/><br/>5) Παύση για 1 δευτ.<br/><br/>6) Εισέπνευσε και χαμήλωσε αργά το βάρος στην αρχική του θέση<br/><br/>7) Επανάλαβε'
            },
            {
                Onoma: 'Πλάγιες εκτάσεις για ώμους με αλτήρες',
                ImageLink: om2,
                Epeksigisi: '1) Στάσου με την πλάτη ίσια, κρατώντας ένα βαράκι σε κάθε χέρι<br/><br/>2) Κράτησε τα χέρια πλήρως εκτεταμένα στα πλευρά, με τις παλάμες στραμμένες στο σώμα σου<br/><br/>3) Κράτησε τους αγκώνες κοντά στα πλευρά σου. Αυτή είναι η θέση εκκίνησης<br/><br/>4) Σήκωσε τα βαράκια προς το πλάι μέχρι να φτάσουν στο ύψος των ώμων. Εξέπνευσε καθώς το κάνεις αυτό<br/><br/>5) Κράτησε για 1′ δευτ. ενώ πιέζεις τους μύες των ώμων σου<br/><br/>6) Επέστρεψε στην αρχική θέση με μια ομαλή ελεγχόμενη κίνηση<br/><br/>7) Επανάλαβε'
            },
            {
                Onoma: 'Πιέσεις Άρνολντ',
                ImageLink: om3,
                Epeksigisi: '1) Κάθισε σε έναν πάγκο με όρθια πλάτη, κρατώντας δυο αλτήρες στα χέρια σου<br/><br/>2) Τοποθέτησε τους αλτήρες στους μηρούς ώστε να μπορείς από εκεί να τους σηκώσεις<br/><br/>3) Σήκωσε τους αλτήρες στο ύψος των ώμων. Οι αγκώνες θα πρέπει να ακουμπάνε στο σώμα σου και οι παλάμες σου να βρίσκονται παράλληλα μεταξύ τους. Αυτή είναι η θέση εκκίνησης<br/><br/>4) Αυτή η άσκηση έχει 3 στάδια. Το στάδιο εκκίνησης με τους αγκώνες να ακουμπάνε το σώμα, το μεσαίο στάδιο όπου οι αγκώνες θα βρίσκονται σε ορθή γωνία στα πλάγια του σώματος και το τελικό στάδιο όπου τα χέρια θα βρίσκονται σε πλήρη έκταση πάνω από το κεφάλι<br/><br/>5) Κράτησε για 1 δευτ. στο τελικό στάδιο και επέστρεψε στην θέση εκκίνησης αργά και σταθερά καθώς εκπνέεις<br/><br/>6) Επανάλαβε'
            }
        ]
    },
    {
        muscleGroup: 'Triceps',
        exercises: [
            {
                Onoma: 'Εκτάσεις τρικεφάλων στην τροχαλία πάνω από το κεφάλι',
                ImageLink: trik1,
                Epeksigisi: '1) Προσάρτησε ένα σχοινί σε μια χαμηλή τροχαλία.<br/><br/>2) Πιάσε το σχοινί και με τα δύο χέρια με ουδέτερη λαβή. Γύρισε το σώμα αντίθετα στην τροχαλία.<br/><br/>3) Προέκτεινε πλήρως τα χέρια, μέχρι να είναι ακριβώς πάνω από το κεφάλι<br/><br/>4) Κράτησε τους αγκώνες κοντά στο κεφάλι. Αυτή είναι η θέση εκκίνησης<br/><br/>5) Κατέβασε αργά το σχοινί πίσω από το κεφάλι, κρατώντας τα μπράτσα ακίνητα. Κρατήσε για 1 δευτ.<br/><br/>6) Επέστρεψε στην αρχική θέση εκτείνοντας τα χέρια. Εξέπνευσε καθώς το κάνεις αυτό.<br/><br/>7) Επανάλαβε'
            },
            {
                Onoma: 'Εκτάσεις τρικεφάλων με αλτήρα',
                ImageLink: trik2,
                Epeksigisi: '1) Κάθισε σε ένα πάγκο με στήριξη στην πλάτη.<br/><br/>2) Κράτησε ένα βαράκι στο άκρο της λαβής και με τα δύο χέρια. Οι παλάμες θα πρέπει να βλέπουν προς τα μέσα.<br/><br/>3) Κράτησε τον αλτήρα πίσω από το κεφάλι με τα χέρια σε πλήρη έκταση. Αυτή είναι η αρχική θέση<br/><br/>4) Τα μπράτσα σου θα πρέπει να βρίσκονται κοντά στο κεφάλι σου (οι δικέφαλοι να ακουμπάνε τους κροτάφους).<br/><br/>5) Κινώντας μόνο τους πήχεις, χαμήλωσε τον αλτήρα πίσω από το κεφάλι μέχρι οι πήχεις να ακουμπήσουν τους δικέφαλους. Κράτησε για 1 δευτ.<br/><br/>6) Επέστρεψε στην αρχική θέση χρησιμοποιώντας τους τρικέφαλους για να επεκτείνεις τα χέρια σου και να σηκώσεις το βάρος. Εξέπνευσε καθώς το κάνεις αυτό.<br/><br/>7) Επανάλαβε'
            },
            {
                Onoma: 'Πιέσεις πάγκου με κλειστή λαβή',
                ImageLink: trik3,
                Epeksigisi: '1) Ξάπλωσε σε έναν οριζόντιο πάγκο με τα πόδια να ακουμπούν στο πάτωμα. Βεβαιώσου ότι η πλάτη είναι εντελώς επίπεδη στον πάγκο, χωρίς να κάμπτεται η σπονδυλική στήλη.<br/><br/>2) Πιάσε την μπάρα με κανονική λαβή, με τα χέρια ελαφρώς στενότερα από το πλάτος των ώμων. Πιέστε προς τα πάνω χρησιμοποιώντας το στήθος και τους ώμους για να σηκώσεις την μπάρα.<br/><br/>3) Χαμήλωσε αργά προς το κέντρο του στήθους χρησιμοποιώντας τους τρικέφαλους. Κρατήστε για 1 δευτ.<br/><br/>4) Χωρίς να ταλαντεύεις το βάρος, πίεσε την μπάρα επάνω, ισιώνοντας τα χέρια και κλειδώνοντας τους αγκώνες. Κράτα για 1 δευτ.<br/><br/>5) Επανάλαβε'
            }
        ]
    },
    {
        muscleGroup: 'Pectorals',
        exercises: [
            {
                Onoma: 'Push-ups',
                ImageLink: stith1,
                Epeksigisi: '1) Στήριξε το σώμα σου σε μια ευθεία επιφάνεια με τα χέρια σε άνοιγμα μεγαλύτερο από αυτό των ώμων σου και τα ακροδάχτυλα των ποδιών να ακουμπάνε σταθερά στο πάτωμα<br/><br/>2) Φέρε τα χέρια σε πλήρη έκταση και το σώμα σε απόλυτα ευθεία γραμμή. Αυτή είναι η θέση εκκίνησης<br/><br/>3) Εισέπνευσε και χαμήλωσε το σώμα μέχρι το στήθος σου να φτάσει κοντά στο πάτωμα<br/><br/>4) Παύση για 1 δευτ. και ανύψωσε το σώμα πάλι στη θέση εκκίνησης<br/><br/>5) Επανάλαβε'
            },
            {
                Onoma: 'Πιέσεις πάγκου με μπάρα',
                ImageLink: stith2,
                Epeksigisi: '1) Ξάπλωσε σε έναν πάγκο με τα πόδια σταθερά στο πάτωμα<br/><br/>2) Πιάσε την μπάρα με άνοιγμα μεγαλύτερο από τους ώμους και ανασηκώστε την από τους ορθοστάτες<br/><br/>3) Φέρε την μπάρα πάνω από το στήθος με τα χέρια σε πλήρη έκταση. Αυτή είναι η αρχική θέση<br/><br/>4) Εισέπνευσε και κατέβασε την μπάρα προς το άνω μέρος του στήθους<br/><br/>5) Συνέχισε μέχρι η μπάρα να έχει βρεθεί λίγο πιο πάνω από το στήθος<br/><br/>6) Παύση για 1 δευτ. και με μια εκρηκτική κίνηση φέρε την μπάρα πάλι στην αρχική της θέση<br/><br/>7) Επανάλαβε'
            },
            {
                Onoma: 'Εκτάσεις στήθους στο Pec Deck',
                ImageLink: stith3,
                Epeksigisi: '1) Κάθισε στο κάθισμα του οργάνου με την πλάτη ευθεία στο μαξιλάρι<br/><br/>2) Πιάσε τις λαβές και βεβαιώσου ότι τα χέρια σου είναι παράλληλα με το πάτωμα. Εάν δεν είναι παράλληλα, ρύθμισε ανάλογα το κάθισμα ή τις λαβές. Αυτή είναι η αρχική σου θέση<br/><br/>3) Εξέπνευσε και πίεσε αργά τις λαβές σφίγγοντας το στήθος ταυτόχρονα καθώς το κάνεις<br/><br/>4) Εισέπνευσε καθώς επιστρέφεις στην αρχική θέση με ελεγχόμενη κίνηση<br/><br/>5) Επανέλαβε'
            }
        ]
    },
    {
        muscleGroup: 'Biceps',
        exercises: [
            {
                Onoma: 'Κάμψεις δικεφάλων με αλτήρες',
                ImageLink: xeria1,
                Epeksigisi: '1) Κρατώντας έναν αλτήρα σε κάθε χέρι, στάσου με τα πόδια στο άνοιγμα των ώμων. <br/><br/> 2) Άφησε τα χέρια να κρέμονται στο πλάι με τις παλάμες στραμμένες σε ουδέτερη μοίρα (φυσική θέση).<br/><br/> 3) Κράτησε τους αγκώνες κοντά στα πλευρά σου<br/><br/> 4) Φέρε το ένα χέρι προς τον ώμο περιστρέφοντας τον πήχη.<br/><br/> 5) Συνέχισε μέχρι ο αλτήρας να βρεθεί στο ύψος του ώμου και οι παλάμες στραμμένες σας προς τα μέσα. Ο πήχης θα πρέπει να βρίσκεται σε κατακόρυφη θέση<br/><br/> 6) Σφίξε το δικέφαλο καθώς φτάνεις στην τελική φάση της κίνησης.<br/><br/> 7) Κατέβασε αργά τον αλτήρα στην αρχική θέση.<br/><br/> 8) Επανάλαβε με το άλλο χέρι.'
            },
            {
                Onoma: 'Κάμψεις δικεφάλων με μπάρα',
                ImageLink: xeria2,
                Epeksigisi: '1) Στάσου όρθιος κρατώντας μια μπάρα με ύπτια λαβή και τα χέρια στο άνοιγμα των ώμων σε πλήρη έκταση<br/><br/>2) Κράτα τους αγκώνες κολλητά στα πλευρά σου. Αυτή είναι η θέση εκκίνησης<br/><br/>3) Με τους άνω βραχίονες ακίνητους, σήκωσε την μπάρα με τους πήχεις καθώς εκπνέεις. Μόνο οι πήχεις σου θα πρέπει να κινούνται.<br/><br/>4) Συνέχισε προς τα πάνω μέχρι η μπάρα να βρίσκεται στο ύψος των ώμων με τους δικέφαλους σε πλήρη σύσπαση. Κράτησε για 1 δευτ.<br/><br/>5) Εισέπνευσε καθώς επιστρέφεις στην αρχική θέση<br/><br/>6) Επανάλαβε'
            }
            ,
            {
                Onoma: 'Κάμψεις δικεφάλων με μπάρα',
                ImageLink: xeria3,
                Epeksigisi: '1) Ρύθμισε την τροχαλία στο κατώτερο μέρος και συνδέστε μια ευθεία μπάρα<br/><br/>2) Στάσου ένα βήμα μακριά από την τροχαλία, με τα πόδια στο άνοιγμα των ώμων<br/><br/>3) Πιάσε τη μπάρα με τα χέρια στο άνοιγμα των ώμων και τις παλάμες προς τα πάνω<br/><br/>4) Κράτησε τους αγκώνες κοντά στα πλευρά σου<br/><br/>5) Κάμψε τους αγκώνες προς τα πάνω.<br/><br/>6) Συνέχισε μέχρι οι πήχεις να βρίσκονται σε κάθετη θέση και οι παλάμες στραμμένες στους ώμους. Κράτησε αυτή τη θέση για 1′ δευτ. σφίγγοντας τους δικέφαλους<br/><br/>7) Χαμήλωσε την μπάρα πίσω στην αρχική της θέση με ομαλή κίνηση<br/><br/>8) Επανάλαβε'
            }
        ]
    }
];

export default exerciseTable;